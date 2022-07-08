const { src, dest } = require('gulp');

// config
const path = require('../config/path.js');
const app = require('../config/app.js');

// plugin
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pugs = require('gulp-pug');
const beautify = require('gulp-beautify');
const webpHtml = require('gulp-webp-html-nosvg');

const pug = () => {
  return src(path.pug.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Pug',
          message: error.message,
        })),
      })
    )
    .pipe(pugs(app.pug))
    .pipe(webpHtml())
    .pipe(beautify.html(app.beautifyHTML))
    .pipe(dest(path.pug.dest));
};

module.exports = pug;
