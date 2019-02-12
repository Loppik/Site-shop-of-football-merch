import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  // isSignInLoading
  // isSignIn
  data: null,
  tokens: null,
  isDataLoading: false,
  isDataError: false,
  isTokensLoading: false,
  isTokensError: false,
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


const getTokensRequest = state => ({
  ...state,
  isTokensLoading: true,
});

const getTokensSuccess = (state, action) => ({
  ...state,
  tokens: action.tokens,
  isTokensLoading: false,
  isTokensError: false,
});

const getTokensFailure = (state, action) => ({
  ...state,
  isTokensLoading: false,
  isTokensError: action.err,
});


const getUserDataRequest = state => ({
  ...state,
  isDataLoading: true,
});

const getUserDataSuccess = (state, action) => ({
  ...state,
  data: action.userData,
  isDataLoading: false,
  isDataError: false,
});

const getUserDataFailure = (state, action) => ({
  ...state,
  isDataLoading: false,
  isDataError: action.err,
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_REQUEST:
      return signInRequest(state);
    case actionTypes.SIGN_IN_SUCCESS:
      return signInSuccess(state, action);
    case actionTypes.SIGN_IN_FAILURE:
      return signInFailure(state, action);

    case actionTypes.GET_TOKENS_REQUEST:
      return getTokensRequest(state);
    case actionTypes.GET_TOKENS_SUCCESS:
      return getTokensSuccess(state, action);
    case actionTypes.GET_TOKENS_FAILURE:
      return getTokensFailure(state, action);

    case actionTypes.getUserDataRequest:
      return getUserDataRequest(state);
    case actionTypes.GET_USER_DATA_SUCCESS:
      return getUserDataSuccess(state, action);
    case actionTypes.GET_USER_DATA_FAILURE:
      return getUserDataFailure(state, action);

    default:
      return state;
  }
};
