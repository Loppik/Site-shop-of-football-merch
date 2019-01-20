import axios from '../../../axios';
import * as actionTypes from './actionTypes';

const getCategoriesRequest = () => ({
  type: actionTypes.GET_CATEGORIES_REQUEST,
});

const getCategoriesSuccess = categories => ({
  type: actionTypes.GET_CATEGORIES_SUCCESS,
  categories,
});

const getCategoriesFailure = err => ({
  type: actionTypes.GET_CATEGORIES_FAILURE,
  err,
});

const getCategories = () => (dispatch) => {
  dispatch(getCategoriesRequest());
  axios.get('categories/')
    .then((response) => {
      dispatch(getCategoriesSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getCategoriesFailure(err));
    });
};

export default getCategories;
