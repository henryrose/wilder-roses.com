import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev-only: serve public/<dir>/index.html for "/<dir>/" requests, like GitHub Pages does.
// Without this the dev server's SPA fallback returns the landing page for every directory URL.
const publicDirIndex = {
  name: 'public-dir-index',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const url = req.url.split('?')[0]
      if (url !== '/' && url.endsWith('/') && existsSync(join('public', url, 'index.html'))) {
        req.url = url + 'index.html'
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), publicDirIndex],
  build: {
    outDir: 'dist'
  }
})
