import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts', './src/dom.ts', './src/number.ts'],
  clean: true,
  dts: true,
  tsconfig: './tsconfig.build.json',
  format: ['esm', 'cjs']
})
