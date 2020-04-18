
"use strict";

const gulp      = require("gulp"),
      concat    = require("gulp-concat"),
      rename    = require("gulp-rename"),
      jsRoot    = "assets/js/";

exports.footerCustom = (done) => {
  return gulp
    .src([
      jsRoot + "footer/custom/Settings.js",
      jsRoot + "footer/custom/**"
    ])
    .pipe(concat(jsRoot + "concat/theme.footer.custom.js"))
    .pipe(gulp.dest("."));
  done();
}

exports.footerVendor = (done) => {
  return gulp
    .src([
      jsRoot + "footer/vendor/*.js"])
    .pipe(concat(jsRoot + "theme.footer.vendor.js"))
    .pipe(gulp.dest("."));
  done();
}
