import axios, { AxiosRequestConfig } from 'axios';
import { mapKeys, snakeCase } from 'lodash';

import { store, PERSIST_KEY } from '../../store';
import history from '../RoutingService';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'http://localhost:4000/api/v1/',
  timeout: 30000,
  apiVersion: 'v1',
};

const ERROR_CODES = {
  uncaught: 700,
  unauthenticated: 401,
};

const ERROR_MESSAGES = {
  uncaught: 'Something went wrong!',
};

export default class V1 {
  client: axios;

  constructor(config: Object = {}) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
    this._addNormalizeParamsInterceptor();
    this._addErrorInterceptor();
  }

  _addNormalizeParamsInterceptor() {
    this.client.interceptors.request.use(config => {
      config.data = mapKeys(config.data, (value, key) => snakeCase(key));
      return config;
    });
  }

  _addErrorInterceptor() {
    this.client.interceptors.response.use(res => res, error => {
      if (!error.response) throw Object.assign({ error_code: ERROR_CODES.uncaught, message: ERROR_MESSAGES.uncaught });
      if (error.response && this._logoutIfUnauthenticated(error)) throw error.response.data;
      throw error.response.data;
    });
  }

  _logoutIfUnauthenticated(error: Object) {
    if (error.response.data.error_code === ERROR_CODES.unauthenticated) {
      // store.dispatch(clearUserData());
      localStorage.removeItem(PERSIST_KEY);
      history.replace('/');
    }
  }
}
