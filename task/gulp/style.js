const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('style', function() {
  gulp.src(__CONFIG.path.style.src)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest(__CONFIG.path.style.dest));
});
