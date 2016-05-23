const gulp   = require('gulp');
const config = require('../config').copy;


gulp.task('copy', () => {
  return gulp.src(config.src)
  .pipe(gulp.dest(config.dist));
});