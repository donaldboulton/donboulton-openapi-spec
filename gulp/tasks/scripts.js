const gulp = require('gulp')
const { compiler } = require('@pixel2html/scripts-frontend')
const { mode } = require('../gulp.config')

gulp.task('scripts', () => compiler(mode))
