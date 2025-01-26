import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    cssCodeSplit: true, // Enable CSS code splitting
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  // GitHub Pages base path
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    historyApiFallback: true,
  },
})