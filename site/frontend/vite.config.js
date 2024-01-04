import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest:  {
        "name": "Acrux Enterprise",
        "icons": [
          {
            src: "Business/Acrux/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          }
        ],
      } 
    })
  ],
 
  resolve: {
    alias: {
      src: "/src",
    },
  },
})
