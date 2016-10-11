'use strict';

var gulp = require('gulp');
var webpack = require('webpack-stream');
var nodemon = require('gulp-nodemon');

gulp.task('compile', function() {
    return gulp.src('src/server/main.ts')
	.pipe(webpack(require('./config/webpack.server.config.js')))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['compile'], function() {
    nodemon({
        script: 'dist/server.js',
        watch: 'src',
        ext: 'ts',
        tasks: ['compile']
    })
});
