import { resolve as _resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const resolve = (...args: string[]) => _resolve(__dirname, ...args)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      core: resolve('src')
    }
  },
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      name: 'SASharedVue',
      fileName: (format) => `shared-vue.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    dts({
      outputDir: resolve(__dirname, 'dist')
    })
  ]
})