import { FormikErrors } from "formik";
import { Action } from "redux";

import { FormValuesSignIn } from "../components/Login/SignInForm";
import { FormValuesSignUp } from "../components/Login/SignUpForm";

import { User } from "../entities/User";

export interface AuthState {
  email: string;
  isAuth: boolean;
  accessToken: string;
}

export enum AuthActionType {
  UPDATE_AUTH = "UPDATE_AUTH",
  CLEAR_AUTH = "CLEAR_AUTH",
  SIGN_IN = "SIGN_IN",
  LOGOUT = "LOGOUT",
  SIGN_UP = "SIGN_UP",
}

export interface UpdateAuthAction extends Action {
  type: AuthActionType.UPDATE_AUTH;
  email: string;
  isAuth: boolean;
}

export interface ClearAuthAction extends Action {
  type: AuthActionType.CLEAR_AUTH;
}

export interface SignInAction extends Action {
  type: AuthActionType.SIGN_IN;
  username: string;
  password: string;
  setErrors: (errors: FormikErrors<FormValuesSignIn>) => void;
}
export interface LogoutAction extends Action {
  type: AuthActionType.LOGOUT;
}

export interface SignUpAction extends Action {
  type: AuthActionType.SIGN_UP;
  user: User;
  setErrors: (errors: FormikErrors<FormValuesSignUp>) => void;
}

export type AuthActionTypes =
  | UpdateAuthAction
  | ClearAuthAction
  | SignInAction
  | LogoutAction
  | SignUpAction;
