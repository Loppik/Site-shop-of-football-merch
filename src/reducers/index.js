import { combineReducers } from 'redux';

import categoriesReducer from '../modules/categories/reducers/categories';
import userReducer from '../modules/login/reducers/login';
import basketReducer from '../modules/basket/reducers/basket';
import productsReducer from '../modules/products/reducers/products';
import productInfoReducer from '../modules/productPage/reducers/productInfo';
import reviewsReducer from '../modules/productPage/reducers/review';

export default combineReducers({
  categories: categoriesReducer,
  user: userReducer,
  basket: basketReducer,
  products: productsReducer,
  product: productInfoReducer,
  reviews: reviewsReducer,
});
