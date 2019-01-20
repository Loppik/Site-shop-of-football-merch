import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  data: null,
  sizes: null,
  isProductLoading: false,
  isProductError: false,
  isSizesLoading: false,
  isSizesError: false,
};

const getProductRequest = state => ({
  ...state,
  isProductLoading: true,
});

const getProductSuccess = (state, action) => ({
  ...state,
  data: action.product,
  isProductLoading: false,
  isProductError: false,
});

const getProductFailure = (state, action) => ({
  ...state,
  isProductLoading: false,
  isProductError: action.err,
});

const getSizesRequest = state => ({
  ...state,
  isSizesLoading: true,
});

const getSizesSuccess = (state, action) => ({
  ...state,
  sizes: action.sizes,
  isSizesLoading: false,
  isSizesError: false,
});

const getSizesFailure = (state, action) => ({
  ...state,
  isSizesLoading: false,
  isSizesError: action.err,
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_REQUEST:
      return getProductRequest(state);
    case actionTypes.GET_PRODUCT_SUCCESS:
      return getProductSuccess(state, action);
    case actionTypes.GET_PRODUCT_FAILURE:
      return getProductFailure(state, action);
    case actionTypes.GET_SIZES_REQUEST:
      return getSizesRequest(state);
    case actionTypes.GET_SIZES_SUCCESS:
      return getSizesSuccess(state, action);
    case actionTypes.GET_SIZES_FAILURE:
      return getSizesFailure(state, action);
    default:
      return state;
  }
};
