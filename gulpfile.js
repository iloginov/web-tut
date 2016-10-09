'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
var tsProject = ts.createProject('server/tsconfig.json');

gulp.task('compile', function() {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(gulp.dest('dist'));
});

gulp.task('demon', ['compile'], function() {
    nodemon({
        script: 'dist/main.js',
        watch: 'server',
        ext: 'ts',
        tasks: ['compile']
    })
});
