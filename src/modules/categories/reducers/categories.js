import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  items: null,
  isLoading: false,
  isError: false,
};

const getCategoriesRequest = state => ({
  ...state,
  isLoading: true,
});

const getCategoriesSuccess = (state, action) => ({
  ...state,
  items: action.categories,
  isLoading: false,
  isError: false,
});

const getCategoriesFailure = (state, action) => ({
  ...state,
  isLoading: false,
  isError: action.err,
});


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_REQUEST:
      return getCategoriesRequest(state);
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return getCategoriesSuccess(state, action);
    case actionTypes.GET_CATEGORIES_FAILURE:
      return getCategoriesFailure(state, action);
    default:
      return state;
  }
};
