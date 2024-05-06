import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: '@hox.io/components',
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`,
    },
  },
})
