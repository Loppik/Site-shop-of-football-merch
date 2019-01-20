import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  data: null,
  isLoading: false,
  isError: false,
};

const signInRequest = state => ({
  ...state,
  isLoading: true,
});

const signInSuccess = (state, action) => ({
  ...state,
  data: action.user,
  isLoading: false,
  isError: false,
});

const signInFailure = (state, action) => ({
  ...state,
  isLoading: false,
  isError: action.err,
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_REQUEST:
      return signInRequest(state);
    case actionTypes.SIGN_IN_SUCCESS:
      return signInSuccess(state, action);
    case actionTypes.SIGN_IN_FAILURE:
      return signInFailure(state, action);
    default:
      return state;
  }
};
