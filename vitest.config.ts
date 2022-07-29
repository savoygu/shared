import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@shared/utils': resolve(__dirname, 'packages/shared/src'),
      '@shared/react': resolve(__dirname, 'packages/ui/react/src'),
      '@shared/vue': resolve(__dirname, 'packages/ui/vue/src'),
    }
  },
  test: {
    // ...
  }
})
