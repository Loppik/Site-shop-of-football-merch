import axios from 'axios';
import store from './store';
import { API_URL } from './configs/config';

const setAuthHeaderInterceptor = (config) => {
  const { user } = store.getState();
  if (user.accessToken) {
    config.headers.Authorization = user.accessToken;
  } else {
    delete config.headers.Authorization;
  }
  return config;
};

let axiosInst = axios.create({
  baseURL: API_URL,
});

axiosInst.interceptors.request.use(setAuthHeaderInterceptor);

export default axiosInst;
