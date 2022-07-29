import { resolve as _resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const resolve = (...args: string[]) => _resolve(__dirname, ...args)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@shared/react': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve('src/index.tsx'),
      name: 'SASharedReact',
      fileName: (format) => `shared-react.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [
    react(),
    dts({
      outputDir: resolve(__dirname, 'dist')
    })
  ]
})
