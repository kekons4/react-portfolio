import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    port: 80,
    https: true
  },
  // build: {
  //   assetsDir: "./assets",
  // }
})
