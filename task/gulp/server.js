/**
 * Loca Setting
 */
const gulp = require('gulp');
gulp.task('server', () => {
  gulp.src(__CONFIG.dist)
    .pipe($.webserver({
      port: 4000,
      livereload: true
    }));
});
