# wilder-roses.com

Family landing page for the Wilder-Roses.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static files go to `dist/` — deploy anywhere you like.

## Structure

- `/` — React landing (`src/App.jsx`). The Writing and Projects lists are the two arrays at the top of that file; the home page shows at most 3 of each.
- `/writing/`, `/projects/` — hand-edited static indexes in `public/`.
- `/sailing/<post>/` — self-contained static posts. `/text2sail/` keeps its own stylesheet.
- `public/site.css` — shared design tokens and page chrome used by everything except Text to Sail.

Adding a post: write it under `public/`, then add a row to the array in `src/App.jsx` and to `public/writing/index.html`. Projects work the same way with `public/projects/index.html`.
