var gulp   = require('gulp');
var config = require('../config').js;
var $      = require('gulp-load-plugins')();


gulp.task('js', ['uglify'], function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    config.dest + 'app.min.js'
  ])
    .pipe($.concat('app.min.js'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('uglify', function() {
  return gulp.src(config.src)
    .pipe($.plumber())
    .pipe($.uglify())
    .pipe($.rename('app.min.js'))
    .pipe(gulp.dest(config.dest));
});