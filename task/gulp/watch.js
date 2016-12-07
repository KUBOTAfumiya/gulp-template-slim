const gulp = require('gulp');
const ms = require('merge-stream');

gulp.task('watch', () => {
  const copyWatches = [];
  if (__CONFIG.path.watch) {
    __CONFIG.path.watch.forEach((src) => { copyWatches.push(src.from); });
    gulp.watch(copyWatches, ['copy', 'watchScript', 'style', 'pug']);
  }
});
