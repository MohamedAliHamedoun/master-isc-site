import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins:[react()] })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Correction pour le chemin CSS sur Vercel
export default defineConfig({
  plugins: [react()],
  base: './',
})
