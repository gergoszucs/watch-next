var gulp = require('gulp');
var prettier = require('gulp-prettier');

gulp.task('prettier', function () {
  return gulp.src([
      'src/**/*.css',
      'src/**/*.ts',
    ])
    .pipe(prettier());
});
