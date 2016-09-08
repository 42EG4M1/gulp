const gulp        = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', (callback) => {
  runSequence(
    ['sass', 'js', 'imagemin', 'copy'],
    'bs',
    'watch',
    callback
  );
});