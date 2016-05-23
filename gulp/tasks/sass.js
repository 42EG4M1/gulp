const gulp   = require('gulp');
const config = require('../config').sass;
const $      = require('gulp-load-plugins')();


gulp.task('sass', () => {
  return gulp.src(config.src)
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.pleeease({
      minifier: true, //true or false
      out: 'all.min.css'
    }))
    .pipe(gulp.dest(config.dest));
});