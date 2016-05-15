var gulp   = require('gulp');
var config = require('../config').images;
var $      = require('gulp-load-plugins')();


gulp.task('imagemin', function() {
  var imageminOptions = {
    optimizationLevel: 7,
    progressive: true,
    interlaced: true,
    svgoPlugins: [{removeViewBox: false}]
  };
  return gulp.src(config.src)
    .pipe($.changed(config.dest))
    .pipe($.plumber())
    .pipe($.imagemin(imageminOptions))
    .pipe(gulp.dest(config.dest));
});
