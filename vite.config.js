import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', 
  plugins: [react()],
  preview: {
    allowedHosts: ['tripperfly.in', 'www.tripperfly.in'],
  },
  build: {
    outDir: 'dist',
  },
})
