var gulp   = require('gulp');
var config = require('../config');
var $      = require('gulp-load-plugins')();


gulp.task('watch', function() {
  $.watch(config.sass.watch, function(event) {
    gulp.start(['sass']);
  });
  $.watch(config.js.watch, function(event) {
    gulp.start(['js']);
  });
  $.watch(config.images.watch, function(event) {
    gulp.start(['imagemin']);
  });
});
