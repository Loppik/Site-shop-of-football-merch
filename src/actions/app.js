import axios from '../axios';
import { getToken } from '../storages/userStorage';
import { getBasketProducts } from '../storages/productsStorage';
import { signInSuccess } from '../modules/login/actions/login';
import getBasketProductsSuccess from '../modules/basket/actions/basket';


export const getUserData = () => (dispatch) => {
  const token = getToken();
  if (token) {
    axios.get('users/')
      .then((response) => {
        dispatch(signInSuccess(response.data));
      });
  }
};

export const getProductsInBasket = () => (dispatch) => {
  const products = getBasketProducts();
  if (products) dispatch(getBasketProductsSuccess(products));
};
