import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

  ],
  build: {
    outDir: 'dist',
    cssCodeSplit: true, // Enable CSS code splitting
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable manual chunking to get a single JS file
      },
    },
  },
})