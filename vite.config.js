import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/qualisophy/', // Cambia la base a "/qualisophy/" para el deploy su GitHub Pages
})
