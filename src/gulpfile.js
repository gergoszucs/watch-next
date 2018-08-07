var gulp = require('gulp');
var prettier = require('gulp-prettier');

gulp.task(
    'prettier',
    taskWrapper(function(error) {
        return gulp
            .src(['src/**/*.ts', 'src/**/*.js', 'src/**/*.css', './*.json', './*.js'])
            .pipe(prettier().on('error', error))
            .pipe(gulp.dest('src'));
    })
);

/**
 * Wrap gulp streams into fail-safe function for better error reporting
 * Usage:
 * gulp.task('less', taskWrapper(function(success, error) {
 *   return gulp.src('less/*.less')
 *      .pipe(less().on('error', error))
 *      .pipe(autoprefixer().on('error', error))
 *      .pipe(minifyCss().on('error', error))
 *      .pipe(gulp.dest('app/css'));
 * }));
 */

function taskWrapper(taskFn) {
    return function(done) {
        var onSuccess = function() {
            done();
        };

        var onError = function(err) {
            done(err);
        };

        var outStream = taskFn(onSuccess, onError);

        if (outStream && typeof outStream.on === 'function') {
            outStream.on('end', onSuccess);
        }
    };
}
