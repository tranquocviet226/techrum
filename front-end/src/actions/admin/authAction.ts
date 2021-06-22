import { FormikErrors } from "formik";
import { FormValuesSignIn } from "components/admin/login/SignInForm"
import { FormValuesSignUp } from "components/admin/login/SignUpForm";
import { User } from "entities/User";
import {
  AuthActionType,
  LogoutAction,
  SignInAction,
  SignUpAction,
  UpdateAuthAction,
  ClearAuthAction,
} from "types/admin/authTypes";

export const login = (
  username: string,
  password: string,
  setErrors: (errors: FormikErrors<FormValuesSignIn>) => void
): SignInAction => ({
  type: AuthActionType.SIGN_IN,
  username: username,
  password: password,
  setErrors,
});

export const register = (
  user: User,
  setErrors: (errors: FormikErrors<FormValuesSignUp>) => void,
  toggle: () => void
): SignUpAction => ({
  type: AuthActionType.SIGN_UP,
  user: user,
  setErrors,
  toggle
});

export const updateAuth = (
  email: string,
  isAuth: boolean,
  accessToken: string
): UpdateAuthAction => ({
  type: AuthActionType.UPDATE_AUTH,
  email: email,
  isAuth: isAuth,
  accessToken: accessToken
});

export const clearAuth = (): ClearAuthAction => ({
  type: AuthActionType.CLEAR_AUTH,
});

export const logout = (): LogoutAction => ({
  type: AuthActionType.LOGOUT,
});
