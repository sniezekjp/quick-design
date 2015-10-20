var gulp = require('gulp');
var sync = require('browser-sync').create();
var styl = require('gulp-stylus');

// live reload server
gulp.task('serve', ['styles'], function() {
    sync.init({
        server: '.'
    });
    gulp.watch('css/**/*.css').on('change', sync.reload);
    gulp.watch('**/*.html').on('change', sync.reload);
});

// compile stylus
gulp.task('styles', function () {
  gulp.src('./css/**/*.styl')
    .pipe(styl())
    .pipe(gulp.dest('./css'))
});

// watch files
gulp.task('watch', function() {
	gulp.watch('css/**/*.styl', ['styles']);
});

// default task
gulp.task('default', ['serve', 'watch']);