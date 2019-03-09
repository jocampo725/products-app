import axios from 'axios/index';
import * as api from './constants/api';

const api = {
  getProducts() {
    return axios.get(`${api.API_URL}/products`);
  },
  getProductsByCategory(category) {
    return axios.get(`${api.API_URL}/products/${category}`);
  }
};

export default api;
