import { AppState } from "../reducers";

export const authSelector = (state: AppState) => ({
  email: state.auth.email,
  isAuth: state.auth.isAuth,
  accessToken: state.auth.accessToken
});
