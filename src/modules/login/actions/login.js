import * as actionTypes from './actionTypes';
import axios from '../../../axios';

const signInStart = () => ({
  type: actionTypes.SIGN_IN_START,
});

export const signInSuccess = user => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  user
});

const signInFailure = err => ({
  type: actionTypes.SIGN_IN_FAILURE,
  err,
});


const getTokensRequest = () => ({
  type: actionTypes.GET_TOKENS_REQUEST,
});

const getTokensSuccess = tokens => ({
  type: actionTypes.GET_TOKENS_SUCCESS,
  tokens,
});

const getTokensFailure = err => ({
  type: actionTypes.GET_TOKENS_FAILURE,
  err,
});


const getUserDataRequest = () => ({
  type: actionTypes.GET_USER_DATA_REQUEST,
});

const getUserDataSuccess = userData => ({
  type: actionTypes.GET_USER_DATA_SUCCESS,
  userData,
});

const getUserDataFailure = err => ({
  type: actionTypes.GET_USER_DATA_FAILURE,
  err,
});

const getUserData = () => (dispatch) => {
  dispatch(getUserDataRequest());

  axios.get('users/')
    .then((response) => {
      dispatch(getUserDataSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getUserDataFailure(err));
    });
};

const signInWithStoredToken = () => (dispatch) => {
  dispatch(signInStart());
  dispatch(getUserData());
};

const signInWithoutStoredToken = signInData => (dispatch) => {
  dispatch(getTokensRequest());

  axios.post('auth/login', signInData)
    .then((response) => {
      dispatch(getTokensSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getTokensFailure(err));
    });
};
