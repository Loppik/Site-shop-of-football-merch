import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  items: null,
  isLoading: false,
  isError: false,
};

const getProductsRequest = state => ({
  ...state,
  isLoading: true,
});

const getProductsSuccess = (state, action) => ({
  ...state,
  items: action.products,
  isLoading: false,
  isError: false,
});

const getProductsFailure = (state, action) => ({
  ...state,
  isLoading: false,
  isError: action.err,
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return getProductsRequest(state);
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return getProductsSuccess(state, action);
    case actionTypes.GET_PRODUCTS_FAILURE:
      return getProductsFailure(state, action);
    default:
      return state;
  }
};
