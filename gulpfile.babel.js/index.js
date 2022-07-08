import gulp from 'gulp';
import browserSync from 'browser-sync';

// config
import path from './config/path.js';
import app from './config/app.js';

// task
import clear from './task/clear.js';
import pug from './task/pug.js';
// const scss = require('./task/scss.js');
// const js = require('./task/js.js');
// const img = require('./task/img.js');
// const font = require('./task/font.js');

const server = () => {
  browserSync.init({ server: { baseDir: path.root } });
};

const watcher = () => {
  gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
  // watch(path.scss.watch, scss).on('all', browserSync.reload);
  // watch(path.js.watch, js).on('all', browserSync.reload);
  // watch(path.img.watch, img).on('all', browserSync.reload);
  // watch(path.font.watch, font).on('all', browserSync.reload);
};

const build = gulp.series(clear, gulp.parallel(pug));
// const build = series(clear, parallel(pug, scss, js, img, font));
const dev = gulp.series(build, gulp.parallel(watcher, server));
// tasks
export { pug };
// exports.scss = scss;
// exports.js = js;
// exports.img = img;
// exports.font = font;

//build
export default app.isProd ? build : dev;
