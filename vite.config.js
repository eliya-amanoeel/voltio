import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Vite 5's default targets. Vite 8 defaults to Safari 16.4 / Chrome 111;
    // keep older iPhones (iOS 14-16.3) working.
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
  },
})
