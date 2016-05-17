var gulp   = require('gulp');
var config = require('../config');
var $      = require('gulp-load-plugins')();


gulp.task('watch', function() {
  $.watch(config.sass.watch, ['sass']);
  $.watch(config.js.watch, ['js']);
  $.watch(config.images.watch, ['imagemin']);
});
