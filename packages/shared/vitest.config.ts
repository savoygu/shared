import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

console.log(resolve(__dirname, 'packages/shared/src'))

export default defineConfig({
  resolve: {
    alias: {
      '@shared/utils': resolve(__dirname, 'src')
    }
  },
  test: {}
})
