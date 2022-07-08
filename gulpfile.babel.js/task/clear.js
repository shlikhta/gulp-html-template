import del from 'del';

// config
import path from '../config/path.js';

export default () => {
  return del(path.root);
};
