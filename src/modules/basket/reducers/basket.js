import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  items: null,
  isLoading: false,
  isError: false,
};

const getBasketProductsRequest = state => ({
  ...state,
  isLoading: true,
});

const getBasketProductsSuccess = (state, action) => ({
  ...state,
  items: action.products,
  isLoading: false,
  isError: false,
});

const getBasketProductsFailure = (state, action) => ({
  ...state,
  isLoading: false,
  isError: action.err,
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_BASKET_PRODUCTS_REQUEST:
      return getBasketProductsRequest(state);
    case actionTypes.GET_BASKET_PRODUCTS_SUCCESS:
      return getBasketProductsSuccess(state, action);
    case actionTypes.GET_BASKET_PRODUCTS_FAILURE:
      return getBasketProductsFailure(state, action);
    default:
      return state;
  }
};
