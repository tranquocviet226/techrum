import {
  AuthActionTypes,
  AuthState,
  AuthActionType,
} from "../types/authTypes";
import { Action } from "redux";

const initialState: AuthState = {
  email: "",
  isAuth: false,
  accessToken: "",
};

const auth = (
  state = initialState,
  action: Action | AuthActionTypes
): AuthState => {
  switch (action.type) {
    case AuthActionType.UPDATE_AUTH:
      return {
        ...state,
        email: state.email,
        isAuth: state.isAuth,
      };
    case AuthActionType.CLEAR_AUTH:
      return { ...initialState };
    default:
      return state;
  }
};

export default auth;
