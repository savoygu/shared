import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/index', './src/dom', './src/number'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true
  }
})
