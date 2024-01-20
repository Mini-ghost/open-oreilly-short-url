import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    ViteMinifyPlugin(),
  ],
  build: {
    modulePreload: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/main.[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
      },
    },
  },
})
