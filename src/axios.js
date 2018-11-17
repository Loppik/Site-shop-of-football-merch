import axios from 'axios';
import store from './store';
import { API_URL } from './configs/config';

const setAuthHeaderInterceptor = (user) => {
  let config = {};
  if (user) {
    config.headers.Authorization = user.accessToken;
  }
  return config;
};

let axiosInst = axios.create({
  baseURL: API_URL,
});

const setAuthHeader = setAuthHeaderInterceptor(store.user);
axiosInst.interceptors.request.use(setAuthHeader);

export default axiosInst;
