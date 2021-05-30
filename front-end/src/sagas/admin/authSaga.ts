import { clearAuth, login, updateAuth } from "actions/admin/authAction";
import { setLoading } from "actions/common/commonAction";
import { setNotification } from "actions/common/notificationAction";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AuthApi } from "services/api";
import history from "services/RoutingService";
import {
  AuthActionType,
  SignInAction,
  SignUpAction
} from "types/admin/authTypes";
import { checkStatus, checkStatusData, parseJSON } from "utils/request";

function* signInSaga(action: SignInAction) {
  const { username, password, setErrors } = action;
  try {
    yield put(setLoading(true));
    const response: AxiosResponse<any> = yield call([AuthApi, AuthApi.signIn], {
      username,
      password,
    });
    const data = parseJSON(checkStatus(response));
    if (data) {
      yield put(updateAuth(username, true, data.data.access_token));
      yield put(
        setNotification({
          type: "success",
          message: "Đăng nhập thành công!",
        })
      );
      setErrors({ api: "" });
      yield put(setLoading(false));
    } else {
      yield put(
        setNotification({
          type: "danger",
          message: "Email hoặc mật khẩu không đúng!",
        })
      );
      yield put(setLoading(false));
      setErrors({ api: response.statusText });
    }
  } catch (e) {
    yield put(
      setNotification({
        type: "danger",
        message: "Email hoặc mật khẩu không đúng!",
      })
    );
    yield put(setLoading(false));
    setErrors({ api: e.errors[0].message });
  }
}

function* signUpSaga(action: SignUpAction) {
  const { user, setErrors, toggle } = action;
  try {
    yield put(setLoading(true));
    const response: AxiosResponse<any> = yield call(
      [AuthApi, AuthApi.signUp],
      user
    );
    const data = checkStatusData(response.data);
    if (data) {
      yield put(
        login(user.email, user.password, () => {
          return undefined;
        })
      );
      yield put(
        setNotification({
          type: "success",
          message: "Đăng ký thành công!",
        })
      );
      setErrors({ api: "" });
      toggle();
      yield put(setLoading(false));
    } else {
      yield put(
        setNotification({
          type: "danger",
          message: response.statusText,
        })
      );
      setErrors({ api: response.statusText });
      yield put(setLoading(false));
    }
  } catch (e) {
    yield put(
      setNotification({
        type: "danger",
        message: e?.message,
      })
    );
    setErrors({ api: e?.message });
    yield put(setLoading(false));
  }
}

function* logoutSaga() {
  try {
    // yield call([AuthApi, AuthApi.logout]);
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
