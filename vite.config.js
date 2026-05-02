// vite.config.js
// base: './' makes all asset paths relative — works on GitHub Pages
// regardless of the repo name, no configuration needed.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
})
