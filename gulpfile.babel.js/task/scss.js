import gulp from 'gulp';
import sass from 'sass';

// config
import path from '../config/path.js';
import app from '../config/app.js';

// plugin
import loadPlugins from 'gulp-load-plugins';
const gp = loadPlugins();
const scss = gp.sass(sass);

export default () => {
  return gulp
    .src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: 'SCSS',
          message: error.message,
        })),
      })
    )
    .pipe(gp.sassGlob())
    .pipe(scss())
    .pipe(gp.webpCss())
    .pipe(gp.autoprefixer())
    .pipe(gp.shorthand())
    .pipe(gp.groupCssMediaQueries())
    .pipe(gp.beautify.css(app.beautifyCSS))
    .pipe(gp.size({ title: 'main.css' }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(gp.rename({ suffix: '.min' }))
    .pipe(gp.csso())
    .pipe(gp.size({ title: 'main.min.css' }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }));
};
