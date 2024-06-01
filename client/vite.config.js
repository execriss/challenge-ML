import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
      '@assets': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/assets'),
      '@images': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/assets/images'),
      '@styles': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/styles')
    }
  }
})
