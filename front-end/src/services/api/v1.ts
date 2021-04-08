import { clearAuth } from "actions/Admin/authAction";
import axios, { AxiosRequestConfig } from "axios";
import { mapKeys, snakeCase } from "lodash";

import { store, PERSIST_KEY } from "../../store";
import history from "../RoutingService";

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: "http://localhost:3000/",
  timeout: 30000,
};

const ERROR_CODES = {
  uncaught: 700,
  unauthenticated: 401,
  badRequest: 400
};

const ERROR_MESSAGES = {
  uncaught: "Something went wrong!",
  badRequest: "Bad Request"
};

const instance = axios.create({
  ...DEFAULT_API_CONFIG,
});

instance.interceptors.request.use((config: any) => {
  config.data = mapKeys(config.data, (value, key) => snakeCase(key));
  return config;
});

instance.interceptors.response.use(
  (response) => {
    console.log("response",response);
    return response;
  },
  (error) => {
    console.log("error",error);
    if (!error.response)
      throw Object.assign({
        error_code: ERROR_CODES.uncaught,
        message: ERROR_MESSAGES.uncaught,
      });
    if (error.response && error.response.data.error_code === ERROR_CODES.badRequest)
      throw Object.assign({
        error_code: ERROR_CODES.badRequest,
        message: ERROR_MESSAGES.badRequest,
      });
    if (error.response && logoutIfUnauthenticated(error))
      throw error.response.data;
    throw error.response.data;
  }
);

const logoutIfUnauthenticated = (error: any) => {
  if (error.response.data.error_code === ERROR_CODES.unauthenticated) {
    store.dispatch(clearAuth());
    localStorage.removeItem(PERSIST_KEY);
    history.replace("/");
  }
};

export default instance;
