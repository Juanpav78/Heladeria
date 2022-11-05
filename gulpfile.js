'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
};

function actualizar() {
    gulp.watch('src/scss/**/*.scss', buildStyles);
  };

exports.default = actualizar;
