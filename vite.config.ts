import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Correction pour le chemin CSS sur Vercel
export default defineConfig({
  plugins: [react()],
  base: './',
})
