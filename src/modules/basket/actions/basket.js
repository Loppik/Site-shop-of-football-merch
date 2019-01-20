import * as actionTypes from './actionTypes';

const getBasketProductsSuccess = products => ({
  type: actionTypes.GET_BASKET_PRODUCTS_SUCCESS,
  products,
});

export default getBasketProductsSuccess;
