import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base relative pour fonctionner hors-ligne (double-clic) et sur GitHub Pages
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
