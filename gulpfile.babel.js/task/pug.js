import gulp from 'gulp';

// config
import path from '../config/path.js';
import app from '../config/app.js';

// plugin
// import plumber from 'gulp-plumber';
// import notify from 'gulp-notify';
// import pug from 'gulp-pug';
// import beautify from 'gulp-beautify';
// import webpHtml from 'gulp-webp-html-nosvg';
import loadPlugins from 'gulp-load-plugins';
const gp = loadPlugins();

export default () => {
  return gulp
    .src(path.pug.src)
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: 'Pug',
          message: error.message,
        })),
      })
    )
    .pipe(gp.pug(app.pug))
    .pipe(gp.webpHtml())
    .pipe(gp.beautify.html(app.beautifyHTML))
    .pipe(gulp.dest(path.pug.dest));
};
