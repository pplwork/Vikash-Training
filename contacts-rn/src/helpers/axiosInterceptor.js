import axios from 'axios';
// import env from "../config/env";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigations/RootNavigator';
import {LOGOUT} from '../constants/routeNames';

let headers = {withCredentials: true};
let Instance = axios.create({
  // baseURL: env.DEV_BACKEND_URL,
  baseURL: 'https://truly-contacts.herokuapp.com/api/',
  headers,
});
Instance.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log(token);
      }
      return config;
    } catch (error) {
      console.log(error);
    }
  },
  error => {
    return Promise.reject(error);
  },
);

Instance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  error => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      navigate(LOGOUT, {tokenExpired: true});
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    return Promise.reject(error)
  },
);

export default Instance;
