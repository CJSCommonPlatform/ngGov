'use strict';

var gulp = require('gulp');
var $    = require('gulp-load-plugins')({ lazy: true });
var source = require('vinyl-source-stream');
var path   = require('path');

module.exports = function (config, log) {
  // copies files from dev and creates the dev version of the less import file
  gulp.task('create-dist', ['copy-dev-js', 'copy-dev-fonts', 'copy-dev-images', 'copy-dev-css'], function () {
    var stream = source(config.dist.name + '.less');

    gulp.src([config.dist.lessPath + '/*.less', config.dist.lessModulesPath + '/*.less'])
      .pipe($.tap(function (file, t) {
        var filePath = 'less' + path.dirname(file.path).split('less')[1];
        stream.write(lessImportString(filePath, path.basename(file.path)));
      }));

    stream.pipe(gulp.dest(config.dist.path));
  });

  gulp.task('copy-dev-css', function () {
    return gulp.src([config.dev.path + '/**', !config.dev.path + config.dist.name + '.less'])
      .pipe(gulp.dest(config.dist.path));
  });

  gulp.task('copy-dev-js', function () {
    return gulp.src(config.dev.path + '/**/*.js')
      .pipe(gulp.dest(config.dist.path));
  });

  gulp.task('copy-dev-assets', function () {
    return gulp.src([config.dev.assetPath + '/**/*'])
      .pipe(gulp.dest(config.dist.fontsPath));
  });
  gulp.task('copy-dev-images', function () {
    return gulp.src([config.dev.imgPath + '/**/*'])
      .pipe(gulp.dest(config.dist.imgPath));
  });

  gulp.task('uglify-dist', function () {
    return gulp.src(config.dist.path + '/*.js')
      .pipe($.ngAnnotate())
      .pipe($.uglify())
      .pipe($.rename({extname: '.min.js'}))
      .pipe(gulp.dest(config.dist.path));
  });
};
