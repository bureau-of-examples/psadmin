"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //run a local dev web server
var open = require('gulp-open'); //open a url in a web browser
var browserify = require('browserify'); //bundles js
var reactify = require('reactify'); //transforms react jsx to js
var source = require("vinyl-source-stream");

var config = {
    port: 9005,
    devBaseUrl: "http://localhost",
    paths: {
        html: "./src/*.html",
        js: "./src/**/*.js",
        mainJS: "./src/main.js",
        dist: "./dist",
        src: "./src"
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

gulp.task("processJS", function(){
    browserify(config.paths.mainJS)
        .transform(reactify)
        .bundle()
        .on("error", console.error.bind(console))
        .pipe(source("bundle.js"))
        .pipe(gulp.dest(config.paths.dist + "/scripts"))
        .pipe(gulp.dest(config.paths.src + "/scripts")) //for intellij
        .pipe(connect.reload());
});

gulp.task("watchHtmlFiles", function(){
   gulp.watch(config.paths.html, ["reloadHtmlFiles"]);
   gulp.watch(config.paths.js, ["processJS"]);
});

gulp.task("default", ["reloadHtmlFiles", "processJS", "openBrowser", "watchHtmlFiles"]);