var gulp   = require('gulp');
var config = require('../config').js;
var $      = require('gulp-load-plugins')();


gulp.task('js', function() {
  return gulp.src(config.src)
    .pipe($.plumber())
    .pipe($.uglify())
    .pipe(gulp.dest(config.dest));
});
