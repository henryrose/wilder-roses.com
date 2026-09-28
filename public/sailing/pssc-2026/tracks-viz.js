/* Speed-coloured GPS maps and the "time at each speed" chart for the PSSC 2026 post. */
(function () {
  var T = window.TRACKS;
  if (!T) return;

  // Sequential blue ramp (light = slow, dark = fast), shared by both maps.
  var RAMP = ['#86b6ef', '#6da7ec', '#5598e7', '#3987e5', '#2a78d6', '#256abf', '#1c5cab', '#184f95', '#104281', '#0d366b'];
  var MAX_KT = 8;
  function hex(h) { return [1, 3, 5].map(function (i) { return parseInt(h.substr(i, 2), 16); }); }
  var RAMP_RGB = RAMP.map(hex);
  function speedColor(kt) {
    var x = Math.max(0, Math.min(1, kt / MAX_KT)) * (RAMP.length - 1);
    var i = Math.min(RAMP.length - 2, Math.floor(x)), f = x - i;
    var a = RAMP_RGB[i], b = RAMP_RGB[i + 1];
    return 'rgb(' + a.map(function (v, k) { return Math.round(v + (b[k] - v) * f); }).join(',') + ')';
  }

  function clock(day, secs) {
    var d = new Date(new Date(T[day].start).getTime() + secs * 1000);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/Los_Angeles' });
  }

  // Same view for both days so the tracks are directly comparable.
  var all = T.sat.pts.concat(T.sun.pts);
  var bounds = [
    [Math.min.apply(null, all.map(function (p) { return p[0]; })), Math.min.apply(null, all.map(function (p) { return p[1]; }))],
    [Math.max.apply(null, all.map(function (p) { return p[0]; })), Math.max.apply(null, all.map(function (p) { return p[1]; }))]
  ];

  function buildMap(day, notes) {
    var el = document.getElementById('map-' + day);
    if (!el || !window.L) return;
    var pts = T[day].pts;
    var map = L.map(el, {
      preferCanvas: true,
      scrollWheelZoom: false,
      dragging: !L.Browser.mobile,
      tap: false,
      zoomSnap: 0.25,
      attributionControl: true
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      className: 'soft-tiles',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.fitBounds(bounds, { padding: [18, 18] });

    for (var i = 0; i < pts.length - 1; i++) {
      L.polyline([[pts[i][0], pts[i][1]], [pts[i + 1][0], pts[i + 1][1]]], {
        color: speedColor((pts[i][2] + pts[i + 1][2]) / 2), weight: 3.5, opacity: 1, lineCap: 'round', interactive: false
      }).addTo(map);
    }

    var narrow = el.clientWidth < 500;
    notes.forEach(function (n) {
      if (narrow) n = { lat: n.lat, lon: n.lon, text: n.text, dir: 'top' };
      L.circleMarker([n.lat, n.lon], { radius: 6, color: '#fff', weight: 2, fillColor: '#1a365d', fillOpacity: 1, interactive: false })
        .bindTooltip(n.text, { permanent: true, direction: n.dir || 'right', offset: n.dir === 'left' ? [-8, 0] : n.dir === 'top' ? [0, -8] : [8, 0], className: 'map-note' })
        .addTo(map);
    });

    // Hover / tap anywhere near the track to read time and speed.
    var cursor = L.circleMarker([0, 0], { radius: 6, color: '#fff', weight: 2, fillColor: '#1a365d', fillOpacity: 1, interactive: false });
    var tip = L.tooltip({ direction: 'top', offset: [0, -8], className: 'map-tip' });
    function nearest(latlng) {
      var p0 = map.latLngToContainerPoint(latlng), best = null, bd = 1e9;
      for (var i = 0; i < pts.length; i++) {
        var q = map.latLngToContainerPoint([pts[i][0], pts[i][1]]);
        var d = (q.x - p0.x) * (q.x - p0.x) + (q.y - p0.y) * (q.y - p0.y);
        if (d < bd) { bd = d; best = i; }
      }
      return bd < 24 * 24 ? best : null;
    }
    function show(e) {
      var i = nearest(e.latlng);
      if (i === null) { map.removeLayer(cursor); map.closeTooltip(tip); return; }
      var ll = [pts[i][0], pts[i][1]];
      cursor.setLatLng(ll).addTo(map);
      tip.setLatLng(ll).setContent('<strong>' + pts[i][2].toFixed(1) + ' kt</strong> &middot; ' + clock(day, pts[i][3]));
      map.openTooltip(tip);
    }
    map.on('mousemove click', show);
    map.on('mouseout', function () { map.removeLayer(cursor); map.closeTooltip(tip); });
  }

  function find(day, secs) {
    var pts = T[day].pts, best = pts[0];
    pts.forEach(function (p) { if (Math.abs(p[3] - secs) < Math.abs(best[3] - secs)) best = p; });
    return best;
  }
  var satTurn = T.sat.pts.reduce(function (a, p) { return p[0] > a[0] ? p : a; });
  var satPeak = T.sat.pts.reduce(function (a, p) { return p[2] > a[2] ? p : a; });
  var sunPeak = T.sun.pts.reduce(function (a, p) { return p[2] > a[2] ? p : a; });

  buildMap('sat', [
    { lat: find('sat', 0)[0], lon: find('sat', 0)[1], text: 'Drifting near the start', dir: 'left' },
    { lat: satTurn[0], lon: satTurn[1], text: 'Windward mark: we retire (' + clock('sat', satTurn[3]) + ')' },
    { lat: satPeak[0], lon: satPeak[1], text: 'Top speed ' + T.sat.peak[0].toFixed(1) + ' kt', dir: 'left' }
  ]);
  buildMap('sun', [
    { lat: sunPeak[0], lon: sunPeak[1], text: 'Top speed ' + T.sun.peak[0].toFixed(1) + ' kt (' + T.sun.peak[3] + ')', dir: 'left' }
  ]);

  // ---- Time-at-speed grouped bar chart (plain SVG) ----
  var chart = document.getElementById('speed-chart');
  if (chart) {
    var labels = ['0–1', '1–2', '2–3', '3–4', '4–5', '5–6', '6–7', '7–8', '8+'];
    var series = [
      { key: 'sat', name: 'Saturday', color: '#2a78d6' },
      { key: 'sun', name: 'Sunday', color: '#eb6834' }
    ];
    var W = Math.max(320, Math.round(chart.clientWidth || 720)), H = W < 500 ? 260 : 300, m = { t: 16, r: 8, b: 44, l: 44 };
    var iw = W - m.l - m.r, ih = H - m.t - m.b;
    var yMax = 50, ticks = [0, 10, 20, 30, 40, 50];
    var gw = iw / labels.length, bw = Math.max(6, Math.min(26, (gw - (W < 500 ? 6 : 14)) / 2));
    var svgNS = 'http://www.w3.org/2000/svg';
    function el(name, attrs, text) {
      var n = document.createElementNS(svgNS, name);
      for (var k in attrs) n.setAttribute(k, attrs[k]);
      if (text != null) n.textContent = text;
      return n;
    }
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': 'Minutes spent in each 1-knot speed band, Saturday versus Sunday' });
    ticks.forEach(function (t) {
      var y = m.t + ih - (t / yMax) * ih;
      svg.appendChild(el('line', { x1: m.l, x2: W - m.r, y1: y, y2: y, stroke: t === 0 ? '#a0aec0' : '#e4e8ec', 'stroke-width': 1 }));
      svg.appendChild(el('text', { x: m.l - 8, y: y + 4, 'text-anchor': 'end', class: 'ax' }, t));
    });
    svg.appendChild(el('text', { x: 12, y: m.t + ih / 2, transform: 'rotate(-90 12 ' + (m.t + ih / 2) + ')', 'text-anchor': 'middle', class: 'ax' }, 'minutes'));
    var tipEl = document.getElementById('speed-tip');
    labels.forEach(function (lab, gi) {
      var gx = m.l + gi * gw + gw / 2;
      svg.appendChild(el('text', { x: gx, y: H - m.b + 18, 'text-anchor': 'middle', class: 'ax' }, lab));
      series.forEach(function (s, si) {
        var v = T[s.key].bands[gi];
        var h = (v / yMax) * ih;
        var x = gx - bw - 1 + si * (bw + 2);
        var y = m.t + ih - h;
        if (h > 0.5) {
          var r = Math.min(4, h, bw / 2);
          var d = 'M' + x + ',' + (m.t + ih) + 'V' + (y + r) + 'Q' + x + ',' + y + ' ' + (x + r) + ',' + y +
            'H' + (x + bw - r) + 'Q' + (x + bw) + ',' + y + ' ' + (x + bw) + ',' + (y + r) + 'V' + (m.t + ih) + 'Z';
          svg.appendChild(el('path', { d: d, fill: s.color }));
        }
        var hit = el('rect', { x: x - 1, y: m.t, width: bw + 2, height: ih, fill: 'transparent', tabindex: 0,
          'aria-label': s.name + ', ' + lab + ' knots: ' + v.toFixed(1) + ' minutes' });
        function on(ev) {
          tipEl.innerHTML = '<strong>' + s.name + '</strong><br>' + lab + ' kt: ' + v.toFixed(1) + ' min';
          var box = chart.getBoundingClientRect(), sc = box.width / W;
          tipEl.style.left = ((x + bw / 2) * sc) + 'px';
          tipEl.style.top = (Math.max(m.t, y) * sc - 8) + 'px';
          tipEl.hidden = false;
        }
        hit.addEventListener('mouseenter', on);
        hit.addEventListener('focus', on);
        hit.addEventListener('click', on);
        hit.addEventListener('mouseleave', function () { tipEl.hidden = true; });
        hit.addEventListener('blur', function () { tipEl.hidden = true; });
        svg.appendChild(hit);
      });
    });
    // Direct labels on each day's tallest bar.
    series.forEach(function (s, si) {
      var b = T[s.key].bands, gi = b.indexOf(Math.max.apply(null, b));
      var x = m.l + gi * gw + gw / 2 - bw - 1 + si * (bw + 2) + bw / 2;
      var y = m.t + ih - (b[gi] / yMax) * ih - 8;
      svg.appendChild(el('text', { x: x, y: y, 'text-anchor': 'middle', class: 'dl' }, s.name));
    });
    chart.insertBefore(svg, tipEl);
  }
})();
