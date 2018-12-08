import { combineReducers } from 'redux';

import products from './products';
import user from './user';
import findText from './findText';

export default combineReducers({
  products,
  user,
  findText,
});
