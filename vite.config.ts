
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/ParmenionWebsiteHosted/',
  server: {
    watch: {
      ignored: ['**/Screenshot*.png', '**/*.mp4'],
    },
  },
})
