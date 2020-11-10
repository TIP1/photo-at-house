var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("css/style.css").on('change', () => {
        browserSync.reload();
      });
    gulp.watch("materials.html").on('change', () => {
      browserSync.reload();
    });
});