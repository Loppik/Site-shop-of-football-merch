import * as actionTypes from './actionTypes';
import axios from '../../../axios';

const getProductsRequest = () => ({
  type: actionTypes.GET_PRODUCTS_REQUEST,
});

const getProductsSuccess = products => ({
  type: actionTypes.GET_PRODUCTS_SUCCESS,
  products,
});

const getProductsFailure = err => ({
  type: actionTypes.GET_PRODUCTS_FAILURE,
  err,
});

const getProducts = ctRouteName => (dispatch) => {
  dispatch(getProductsRequest());
  axios.get(`shoes/ct/${ctRouteName}`) // FIXME: change route naming (shoes on products)
    .then((response) => {
      dispatch(getProductsSuccess(response.data.shoes)); // FIXME: remove wrapping as shoes
    })
    .catch((err) => {
      dispatch(getProductsFailure(err));
    });
};

export default getProducts;
