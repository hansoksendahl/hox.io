import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    rollupOptions: {
      external: ['solid-js'],
      output: {
        globals: {
          'solid-js': 'solid-js',
        },
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'create-form-provider',
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`,
    },
  },
})
