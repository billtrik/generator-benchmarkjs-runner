var gulp        = require('gulp')
  , shell       = require('gulp-shell')
  , gutil       = require('gulp-util');

gulp.task('watch', function (cb) {
  var folderPath = './implementations/**/*.js';
  var alreadyRunning = false;

  gutil.log('Listening for file changes inside ', gutil.colors.magenta('"' + folderPath + '"'));

  gulp.watch([folderPath], function () {
    if (alreadyRunning) {
      return;
    }

    alreadyRunning = true;

    gulp.src('')
      .pipe(shell('npm run benchmark', {
        ignoreErrors: false
      }))
      .on('error', function () {
        alreadyRunning = false;
      })
      .on('end', function () {
        alreadyRunning = false;
      });
  });
});

gulp.task('default', ['watch']);
