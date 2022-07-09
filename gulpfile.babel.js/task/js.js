import gulp from 'gulp';

// config
import path from '../config/path.js';
import app from '../config/app.js';

// plugin
import loadPlugins from 'gulp-load-plugins';
const gp = loadPlugins();
const webpack = require('webpack-stream');

export default () => {
  return gulp
    .src(path.js.src, { sourcemaps: app.isDev })
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: 'JavaScript',
          message: error.message,
        })),
      })
    )
    .pipe(gp.babel())
    .pipe(webpack(app.webpack))
    .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }));
};
