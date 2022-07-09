import gulp from 'gulp';

// config
import path from '../config/path.js';
import app from '../config/app.js';

// plugin
import loadPlugins from 'gulp-load-plugins';
import gulpif from 'gulp-if';
const gp = loadPlugins();

export default () => {
  return gulp
    .src(path.img.src)
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: 'Image',
          message: error.message,
        })),
      })
    )
    .pipe(gp.newer(path.img.dest))
    .pipe(gp.webp())
    .pipe(gulp.dest(path.img.dest))
    .pipe(gulp.src(path.img.src))
    .pipe(gp.newer(path.img.dest))
    .pipe(gulpif(app.isProd, gp.imagemin(app.imagemin)))
    .pipe(gulp.dest(path.img.dest));
};
