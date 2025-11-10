import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // 👈 This line ensures correct relative paths for Netlify
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})