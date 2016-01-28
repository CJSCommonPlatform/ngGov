'use strict';

var gulp = require('gulp');
var $    = require('gulp-load-plugins')({ lazy: true });

module.exports = function(config, log){
  gulp.task('build-css', ['create-main-less']);

  gulp.task('create-main-less', ['copy-less'], function () {
    return gulp.src([config.dev.lessPath + '/*.less', config.dev.lessModulesPath + '/*.less'])
      .pipe($.lessImport(config.dist.name + '.less'))
      .pipe(gulp.dest(config.dev.path));
  });

  gulp.task('copy-less', ['copy-less-theme', 'copy-less-modules']);

  gulp.task('copy-less-theme', function () {
    gulp.src(config.src.bootstrapWrapperPath + '/**')
      .pipe(gulp.dest(config.dev.lessPath));
  });

  gulp.task('copy-less-modules', function () {
    //Copy modules files
    return gulp.src(config.src.modulesPath + '/**/*.less')
      .pipe($.flatten())
      .pipe(gulp.dest(config.dev.lessModulesPath));
  });
}