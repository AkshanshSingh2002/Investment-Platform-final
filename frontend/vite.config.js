import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // ← This is what allows `document` and DOM APIs
    globals: true
  },
})
