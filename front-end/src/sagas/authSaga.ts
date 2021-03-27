import { takeLatest, all, put, call } from "redux-saga/effects";

import history from "../services/RoutingService";
import { updateAuth, clearAuth } from "../actions/authAction";
import { AuthActionType, SignInAction, SignUpAction } from "../types/authTypes";

function* signInSaga(action: SignInAction) {
  const { username, password, setErrors } = action;
  try {
    // const response = yield call([AuthApi, AuthApi.login], user);
    // put response.data    
    yield put(updateAuth(username, true));
    history.push("/admin/dashboard");
  } catch (e) {
    // errors by server response, setErrors of formik
    setErrors({ api: e.message });
  }
}

function* signUpSaga(action: SignUpAction) {
  const { user, setErrors } = action;
  try {
    // yield call([AuthApi, AuthApi.signup], values);
    // history.push('/');
  } catch (e) {
    // errors by server response, setErrors of formik
    setErrors({ api: e.message });
  }
}

function* logoutSaga() {
  try {
    // yield call([AuthApi, AuthApi.logout]);
    yield put(clearAuth());
  } catch (errors) {
    // handle show message errors
  } finally {
    history.push("/");
  }
}

export default function* () {
  yield all([
    takeLatest(AuthActionType.SIGN_IN, signInSaga),
    takeLatest(AuthActionType.LOGOUT, logoutSaga),
    takeLatest(AuthActionType.SIGN_UP, signUpSaga),
  ]);
}
