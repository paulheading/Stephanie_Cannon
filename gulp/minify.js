
'use strict';

const gulp        = require('gulp'),
      babel       = require('gulp-babel'),
      maps        = require('gulp-sourcemaps'),
      rename      = require('gulp-rename'),
      uglify      = require('gulp-uglify'),
      jsRoot      = 'assets/js/';

exports.footer = (done) => {
  return gulp.src(jsRoot + 'concat/theme.footer.custom.js')
    .pipe(babel({ presets : ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(gulp.dest(jsRoot));
  done();
}
