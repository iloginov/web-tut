'use strict';

var gulp = require('gulp');
var gutil = require("gulp-util");
var WebpackStream = require('webpack-stream');
var nodemon = require('gulp-nodemon');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var backendConfig = require('./config/webpack.server.config.js');
var frontendConfig = require('./config/webpack.client.config.js');

gulp.task('frontend-build', function(done) {
    return gulp.src('src/client/main.tsx')
	    .pipe(WebpackStream(frontendConfig))
        .pipe(gulp.dest('public/assets'));
});

gulp.task('frontend-watch', ['frontend-build'], function() {
    var cfg = Object.create(frontendConfig);
    cfg.devtool = "eval";
    cfg.debug = true;

    var compiler = webpack(cfg);

    new WebpackDevServer(compiler, {
        publicPath: "/" + cfg.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});

gulp.task('backend-build', function(done) {
    return gulp.src('src/server/main.tsx')
	    .pipe(WebpackStream(backendConfig))
        .pipe(gulp.dest('dist'));
});

gulp.task('backend-watch', ['backend-build'], function() {
    nodemon({
        script: 'dist/server.js',
        watch: 'src',
        ext: 'ts tsx js jsx',
        tasks: ['backend-build']
    })
});

gulp.task('build', ['frontend-build', 'backend-build']);
gulp.task('watch', ['frontend-watch', 'backend-watch']);
