const gulp = require('gulp');
const named = require('vinyl-named');
const conf = require('../webpack.config.js');

const exeWebPack = (watch) => {
  conf.watch = watch;
  return gulp.src(__CONFIG.path.script.src)
  .pipe(named())
  .pipe($.webpack(conf))
  .pipe(gulp.dest(__CONFIG.path.script.dest));
};

gulp.task('script', () => exeWebPack(false));
gulp.task('watchScript', () => exeWebPack(true));
