import { createActions } from 'redux-actions';
import { ActionUsers } from '../constants';

export const {
  updateAuth,
  clearAuth,
  login,
  logout,
  signUp
} = createActions({
  [ActionUsers.UPDATE_AUTH]: (payload: any) => payload,
  [ActionUsers.CLEAR_AUTH]: (payload: any) => payload,
  [ActionUsers.LOGIN]: (payload: any) => payload,
  [ActionUsers.LOGOUT]: (payload: any) => payload,
  [ActionUsers.SIGN_UP]: (payload: any) => payload,
});
