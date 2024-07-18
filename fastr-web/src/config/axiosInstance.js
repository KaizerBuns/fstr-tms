import axios from 'axios';
import env from '@/config/env';
import store from '@/store';

console.log('config.NODE_SERVER: ', env.NODE_SERVER);
const baseURL = env.NODE_SERVER;
console.log('baseURL: ', baseURL);

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
