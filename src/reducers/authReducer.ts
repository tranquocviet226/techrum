import { handleActions } from 'redux-actions';

import {
  updateAuth,
  clearAuth,
} from '../actions/authAction';

export const initialState = {
  email: '',
  isAuth: false,
  userToken: '',
};

export default handleActions({
  [updateAuth]: (state, action) => ({
    ...state, ...action.payload,
  }),
  [clearAuth]: () => ({
    ...initialState,
  }),
}, initialState);
