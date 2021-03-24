import { AppState } from "../reducers";

export const authSelector = (state: AppState) => ({
  auth: state.auth,
});
