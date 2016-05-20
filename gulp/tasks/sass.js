var gulp   = require('gulp');
var config = require('../config').sass;
var $      = require('gulp-load-plugins')();


gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.pleeease({
      minifier: true, //true or false
      out: 'all.min.css'
    }))
    .pipe(gulp.dest(config.dest));
});
