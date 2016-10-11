'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', function() {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['compile'], function() {
    nodemon({
        script: 'dist/main.js',
        watch: 'src',
        ext: 'ts',
        tasks: ['compile']
    })
});
