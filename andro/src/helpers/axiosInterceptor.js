import axios from "axios";
import env from "../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

let headers = { withCredentials: true };
let instance = axios.create({
  // baseURL: env.DEV_BACKEND_URL,
  baseURL: "https://truly-contacts.herokuapp.com/api/",
  headers,
});
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(token)
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
