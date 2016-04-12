'use strict';

var path = require('path');
var gulp = require('gulp');
var nsp = require('gulp-nsp');

gulp.task('nsp', function (cb) {
  nsp({package: path.resolve('package.json')}, cb);
});

gulp.task('prepublish', ['nsp']);
