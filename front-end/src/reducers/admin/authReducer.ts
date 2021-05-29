import {
  AuthActionTypes,
  AuthState,
  AuthActionType,
} from "../../types/admin/authTypes";

const initialState: AuthState = {
  email: "",
  isAuth: false,
  accessToken: "",
};

const auth = (
  state: AuthState = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case AuthActionType.UPDATE_AUTH:
      return {
        ...state,
        email: action.email,
        isAuth: action.isAuth,
        accessToken: action.accessToken
      };
    case AuthActionType.CLEAR_AUTH:
      return { ...initialState };
    default:
      return state;
  }
};

export default auth;
