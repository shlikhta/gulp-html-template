const pathSrc = './src';
const pathRoot = './public';
const pathDest = './public/assets';

export default {
  root: pathRoot,
  pug: {
    src: pathSrc + '/pug/*.pug  ',
    watch: pathSrc + '/pug/**/*.pug',
    dest: pathRoot,
  },
  scss: {
    src: pathSrc + '/scss/*.{sass,scss}  ',
    watch: pathSrc + '/scss/**/*.{sass,scss}',
    dest: pathDest + '/css',
  },
  js: {
    src: pathSrc + '/js/*.js  ',
    watch: pathSrc + '/js/**/*.js',
    dest: pathDest + '/js',
  },
  img: {
    src: pathSrc + '/img/*.{png,jpg,jpeg,gif,svg}  ',
    watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
    dest: pathDest + '/img',
  },
  font: {
    src: pathSrc + '/font/*.ttf',
    watch: pathSrc + '/font/**/*.ttf',
    dest: pathDest + '/font',
  },
};
