
'use strict';

const gulp   = require('gulp'),
      Concat = require('./gulp/concat.js'),
      Minify = require('./gulp/minify.js'),
      Reset  = require('./gulp/reset.js'),
      Util   = require('./gulp/util.js'),
      jsRoot = 'assets/js/';

gulp.task('concat:footerCustom', Concat.footerCustom);
gulp.task('concat:footerVendor', Concat.footerVendor);

gulp.task('minify:footer', Minify.footer);

gulp.task('tidy',  Util.tidy);
gulp.task('send',  Util.send);
gulp.task('bust',  Util.bust);
gulp.task('reset', Reset.all);

gulp.task('watch',function(done) {
  gulp.watch([
    jsRoot + 'header/**',
    jsRoot + 'footer/**'],gulp.series(['default']));
  done();
})

gulp.task('default',gulp.series([
  'reset',
  'concat:footerCustom',
  'concat:footerVendor',
  'minify:footer',
  'tidy',
  'bust'
]));
