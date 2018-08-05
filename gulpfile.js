var gulp = require('gulp');
var beautify = require('gulp-beautify');

gulp.task('beautify', function () {
  return gulp.src([
      'src/**/*.html',
      'src/**/*.css',
      'src/**/*.ts',
    ])
    .pipe(beautify());
});
