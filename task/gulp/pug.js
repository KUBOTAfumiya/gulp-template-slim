const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', () => {
  gulp.src(__CONFIG.path.pug.src)
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(__CONFIG.path.pug.dest));
});