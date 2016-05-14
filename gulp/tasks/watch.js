var gulp   = require('gulp');
var config = require('../config');


gulp.task('watch', function() {
  gulp.watch(config.sass.watch, ['sass']);
  gulp.watch(config.js.watch, ['js']);
});
