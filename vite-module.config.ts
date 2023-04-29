import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import VitePluginStyleInject from 'vite-plugin-style-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePluginStyleInject(), svgr(), react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main-module.tsx'),
      name: 'ReactTechsLogos',
      // the proper extensions will be added
      fileName: 'react-techs-logos'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'react'
        }
      }
    }
  }
})
