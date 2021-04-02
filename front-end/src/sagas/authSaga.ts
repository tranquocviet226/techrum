import { takeLatest, all, put, call } from "redux-saga/effects";

import history from "../services/RoutingService";
import { updateAuth, clearAuth } from "../actions/authAction";
import { AuthActionType, SignInAction, SignUpAction } from "../types/authTypes";
import AuthApi from "../services/api";
import { AxiosResponse } from "axios";
import { checkStatus, checkStatusData, parseJSON } from "utils/request";

function* signInSaga(action: SignInAction) {
  const { username, password, setErrors } = action;
  try {
    const response: AxiosResponse<any> = yield call([AuthApi, AuthApi.signIn], {
      username,
      password,
    });
    const data = parseJSON(checkStatus(response));
    if (data) {
      yield put(updateAuth(username, true));
      history.push("/admin/dashboard");
    } else {
      setErrors({ api: response.statusText });
    }
  } catch (e) {
    // errors by server response, setErrors of formik
    setErrors({ api: e.errors[0].message });
  }
}

function* signUpSaga(action: SignUpAction) {
  const { user, setErrors, toggle } = action;
  try {
    const response: AxiosResponse<any> = yield call(
      [AuthApi, AuthApi.signUp],
      user
    );
    const data = checkStatusData(response.data);
    if (data) {
      toggle();
    } else {
      setErrors({ api: response.statusText });
    }
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
