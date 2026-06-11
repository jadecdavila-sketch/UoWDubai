import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project Pages serve under /UoWDubai/; local dev stays at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/UoWDubai/' : '/',
  plugins: [react()],
}))
