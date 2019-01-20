import * as actionTypes from './actionTypes';
import axios from '../../../axios';

const getReviewsRequest = () => ({
  type: actionTypes.GET_REVIEWS_REQUEST,
});

const getReviewsSuccess = reviews => ({
  type: actionTypes.GET_REVIEWS_SUCCESS,
  reviews,
});

const getReviewsFailure = err => ({
  type: actionTypes.GET_REVIEWS_FAILURE,
  err,
});

export const getReviews = productId => (dispatch) => {
  dispatch(getReviewsRequest());
  axios.get(`review/${productId}`)
    .then((response) => {
      dispatch(getReviewsSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getReviewsFailure(err));
    });
};
