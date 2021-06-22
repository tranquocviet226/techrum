import { clearAuth } from "actions/admin/authAction";
import axios, { AxiosRequestConfig } from "axios";
import { APP_URL } from "constants/index";
import { mapKeys, snakeCase } from "lodash";

import { store, PERSIST_KEY } from "../../store";
import history from "../RoutingService";


const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: APP_URL,
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
    return response;
  },
  (error) => {
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
  if (error.response.data.statusCode === ERROR_CODES.unauthenticated) {
    store.dispatch(clearAuth());
    localStorage.removeItem(PERSIST_KEY);
    history.replace("/");
  }
};

export default instance;
