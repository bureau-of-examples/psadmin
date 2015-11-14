"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //run a local dev web server
var open = require('gulp-open'); //open a url in a web browser

var config = {
    port: 9005,
    devBaseUrl: "http://localhost",
    paths: {
        html: "./src/*.html",
        dist: "./dist"
    }
};

gulp.task("startDevWebServer", function(){
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task("openBrowser", ["startDevWebServer"], function(){
    gulp.src("dist/index.html").pipe(open({
        url: config.devBaseUrl + ":" + config.port + "/"
    }));
});

gulp.task("reloadHtmlFiles", function(){

    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());//I assume connect.reload will not do anything if the web server is not up.
});

gulp.task("watchHtmlFiles", function(){
   gulp.watch(config.paths.html, ["reloadHtmlFiles"]);
});

gulp.task("default", ["reloadHtmlFiles", "openBrowser", "watchHtmlFiles"]);