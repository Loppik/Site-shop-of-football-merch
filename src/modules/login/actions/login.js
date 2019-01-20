import * as actionTypes from './actionTypes';

export const signInSuccess = user => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  user
});
