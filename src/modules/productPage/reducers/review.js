import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  items: null,
  isLoading: false,
  isError: false,
};

const getReviewsRequest = state => ({
  ...state,
  isLoading: true,
});

const getReviewsSuccess = (state, action) => ({
  ...state,
  items: action.reviews,
  isLoading: false,
  isError: false,
});

const getReviewsFailure = (state, action) => ({
  ...state,
  isLoading: false,
  isError: action.err,
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_REVIEWS_REQUEST:
      return getReviewsRequest(state);
    case actionTypes.GET_REVIEWS_SUCCESS:
      return getReviewsSuccess(state, action);
    case actionTypes.GET_REVIEWS_FAILURE:
      return getReviewsFailure(state, action);
    default:
      return state;
  }
};
