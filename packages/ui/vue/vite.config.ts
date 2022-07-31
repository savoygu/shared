/// <reference types="vitest" />
import { resolve as _resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const resolve = (...args: string[]) => _resolve(__dirname, ...args)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@shared/vue': resolve(__dirname, 'src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts'
  },
  root: resolve('src'),
  build: {
    outDir: resolve('dist'),
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
    vueJsx(),
    dts({
      outputDir: resolve(__dirname, 'dist')
    })
  ]
})
