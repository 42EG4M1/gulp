const gulp   = require('gulp');
const config = require('../config').default;


gulp.task('default', config.depends);