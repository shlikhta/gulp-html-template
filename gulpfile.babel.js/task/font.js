import gulp from 'gulp';

// config
import path from '../config/path.js';
import app from '../config/app.js';

// plugin
import loadPlugins from 'gulp-load-plugins';
import fonter from 'gulp-fonter-unx';
const gp = loadPlugins();

export default () => {
  return gulp
    .src(path.font.src)
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: 'Font',
          message: error.message,
        })),
      })
    )
    .pipe(gp.newer(path.font.dest))
    .pipe(gp.ttf2woff2())
    .pipe(gulp.dest(path.font.dest))
    .pipe(gulp.src(path.font.src))
    .pipe(fonter(app.fonter))
    .pipe(gulp.dest(path.font.dest));
};
