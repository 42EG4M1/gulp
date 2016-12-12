const gulp        = require('gulp');
const config      = require('../config').js;
const browserSync = require('browser-sync');
const browserify  = require('browserify');
const source      = require('vinyl-source-stream');
const buffer      = require('vinyl-buffer');
const $           = require('gulp-load-plugins')();

// gulp.task('js', ['uglify'], () => {
//   return gulp.src([
//     'node_modules/jquery/dist/jquery.min.js',
// //    'src/assets/scripts/libraries/jquery.pjax.min.js',
// //    'src/assets/scripts/libraries/jquery.lazyload.min.js',
//     config.dest + 'app.min.js'
//   ])
//     .pipe($.concat('app.min.js'))
//     .pipe(gulp.dest(config.dest));
// });
//
// gulp.task('uglify', () => {
//   return gulp.src(config.src)
//     .pipe($.plumber())
//     .pipe($.uglify())
//     .pipe($.rename('app.min.js'))
//     .pipe(gulp.dest(config.dest));
// });

gulp.task('js', () => {
  const b = browserify({
    entries: [config.src]
  });
  return b.bundle()
  .pipe(source('app.min.js'))
  .pipe(buffer())
  .pipe($.uglify({
    preserveComments: 'license'
  }))
  .pipe(gulp.dest(config.dest))
  .pipe(browserSync.reload({
    stream: true,
    once: true
  }));
});