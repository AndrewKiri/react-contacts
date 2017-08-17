var gulp = require('gulp');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('webpack', function () {
    return gulp.src('public/js/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('public/js/'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['webpack'], function () {
    browserSync.init({
        server: './public'
    });
    gulp.watch('./public/js/react/*.js', ['webpack']);
    gulp.watch('./public/css/*.css').on('change', browserSync.reload);
    gulp.watch('./public/index.html').on('change', browserSync.reload);
});