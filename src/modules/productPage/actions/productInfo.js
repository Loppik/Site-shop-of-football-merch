import * as actionTypes from './actionTypes';
import axios from '../../../axios';

// FIXME: we can have need product in state already because we can go to certain product from list of products where we have this product

const getProductRequest = () => ({
  type: actionTypes.GET_PRODUCT_REQUEST,
});

const getProductSuccess = product => ({
  type: actionTypes.GET_PRODUCT_SUCCESS,
  product,
});

const getProductFailure = err => ({
  type: actionTypes.GET_PRODUCT_FAILURE,
  err,
});

export const getProduct = productId => (dispatch) => {
  dispatch(getProductRequest());
  axios.get(`shoes/${productId}`)
    .then((response) => {
      dispatch(getProductSuccess(response.data.shoes)); // FIXME: remove wrapping
    })
    .catch((err) => {
      dispatch(getProductFailure(err));
    });
};

const getSizesRequest = () => ({
  type: actionTypes.GET_SIZES_REQUEST,
});

const getSizesSuccess = sizes => ({
  type: actionTypes.GET_SIZES_SUCCESS,
  sizes,
});

const getSizesFailure = err => ({
  type: actionTypes.GET_SIZES_FAILURE,
  err,
});

export const getSizes = productId => (dispatch) => {
  dispatch(getSizesRequest());
  axios.get(`sizes/${productId}`)
    .then((response) => {
      dispatch(getSizesSuccess(response.data.sizes)); // FIXME: remove wrapping
    })
    .catch((err) => {
      dispatch(getSizesFailure(err));
    });
};
