import gulp from 'gulp';
import browserSync from 'browser-sync';

// config
import path from './config/path.js';
import app from './config/app.js';

// task
import clear from './task/clear.js';
import pug from './task/pug.js';
import scss from './task/scss.js';
import js from './task/js.js';
import img from './task/img.js';
import font from './task/font.js';

const server = () => {
  browserSync.init({ server: { baseDir: path.root } });
};

const watcher = () => {
  gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
  gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
  gulp.watch(path.js.watch, js).on('all', browserSync.reload);
  gulp.watch(path.img.watch, img).on('all', browserSync.reload);
  gulp.watch(path.font.watch, font).on('all', browserSync.reload);
};

const build = gulp.series(clear, gulp.parallel(pug, scss, js, img, font));
const dev = gulp.series(build, gulp.parallel(watcher, server));

// tasks
export { pug, scss, js, img, font };

// build
export default app.isProd ? build : dev;
