import axios from "axios";
import storage from "./utils/storage";

const instance = axios.create({
  baseURL: "https://pms-shr93.ondigitalocean.app/api",
});

instance.interceptors.request.use((config) => {
  const token = storage.getToken();
  config &&
    config.headers &&
    (config.headers.Authorization = `Bearer ${token}`);
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      return error.response;
    }
  }
);

export default instance;
