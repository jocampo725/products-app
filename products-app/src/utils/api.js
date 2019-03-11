import axios from 'axios/index';
import * as _api from '../constants/api';

const api = {
  getProducts() {
    return axios.get(`${_api.API_URL}/products`);
  },
  getProductsByCategory(category) {
    return axios.get(`${_api.API_URL}/products/${category}`);
  }
};

export default api;
