import { resolve } from 'path'
import consola from 'consola'
import { src, dest } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import gulpSass from 'gulp-sass'
import pc from 'picocolors'
import dartSass from 'sass'

const sass = gulpSass(dartSass)

function buildStyles() {
  return src(resolve(__dirname, './src/styles/*.scss'))
    .pipe(
      sass
        .sync({
          includePaths: ['node_modules']
        })
        .on('error', sass.logError)
    )
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        consola.success(
          `${pc.cyan(details.name)}: ${pc.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${pc.green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    .pipe(dest(resolve(__dirname, './dist/styles')))
}

export default buildStyles
