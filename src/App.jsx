import Carousel from './Carousel'

// Content lists. Newest first. Home shows at most 3 posts / 3 projects.
const posts = [
  { href: '/sailing/pssc-2026/', title: 'Learnings from an Outing with the PTSA Laser Fleet', meta: 'Sailing · September 2026' },
]
const projects = [
  { href: 'https://takemehome.wilder-roses.com/', title: 'Take Me Home', meta: 'Ferry or bridge? Live route times between the Olympic Peninsula and Seattle' },
  { href: '/text2sail/', title: 'Text to Sail', meta: 'A text-message list for Port Townsend small-boat sailors' },
]

function Laser() {
  return (
    <svg className="laser" aria-hidden="true" viewBox="0 0 480 780" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M52 612 Q250 626 462 606" /><path d="M462 606 Q452 630 428 646 L66 646 Q58 630 52 612 Z" /><path d="M128 620 L252 622" />
      <path d="M332 613 L312 72" /><path d="M330 562 L74 566" /><path d="M312 72 Q320 300 330 562" /><path d="M312 72 Q170 320 78 566" />
      <path d="M231 221 L291 219" strokeWidth="5" /><path d="M183 320 L273 318" strokeWidth="5" /><path d="M138 418 L238 416" strokeWidth="5" /><path d="M101 507 L201 505" strokeWidth="5" />
      <path d="M298 646 L293 716 L311 716 L315 646" /><path d="M66 646 L60 712 L82 712 L89 646" />
    </svg>
  )
}

function App() {
  return (
    <div className="wrap home">
      <header className="top">
        <span className="wordmark">The WilderRoses</span>
        <Laser />
      </header>

      <div className="hero">
        <Carousel />
        <p className="intro">
          Hello! This is the online home of the WilderRoses — three humans and
          two dogs based in Port Townsend, Washington. Sometimes we make things
          that live on the internet and they go here.
        </p>
      </div>

      <div className="lists">
        <section>
          <div className="section-head"><h2>Writing</h2><a href="/writing/">All writing →</a></div>
          <div className="rows">
            {posts.slice(0, 3).map((p) => (
              <a className="row" key={p.href} href={p.href}>
                <span className="title">{p.title}</span>
                <span className="meta">{p.meta}</span>
              </a>
            ))}
          </div>
        </section>
        <section>
          <div className="section-head"><h2>Projects</h2><a href="/projects/">All projects →</a></div>
          <div className="rows">
            {projects.slice(0, 3).map((p) => (
              <a className="row" key={p.href} href={p.href}>
                <span className="title">{p.title} <span className="ext">↗</span></span>
                <span className="meta">{p.meta}</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <footer className="foot">
        <span>Made with love © {new Date().getFullYear()}</span>
        <span>Port Townsend, WA</span>
      </footer>
    </div>
  )
}

export default App
