import { setNotification } from "actions/common/notificationAction";
import { setUser } from "actions/user/userAction";
import { AxiosResponse } from "axios";
import { User } from "entities/User";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { GetUserApi } from "services/api/user/getUserApi";
import { UserComponentType } from "types/user/userTypes";
import { checkStatus, parseJSON } from "utils/request";

function* getUserSaga() {
  try {
    const response: AxiosResponse<any> = yield call([
      GetUserApi,
      GetUserApi.getUser,
    ]);
    const data = parseJSON(checkStatus(response));

    if (data) {
      const user: User = {
        id: data.id,
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        avatarUrl: data.avatar_url,
      };
      yield put(setUser(user, data.posts));
    }
  } catch (error) {
    yield put(
      setNotification({
        type: "danger",
        message: error?.message || "Có lỗi xảy ra! Vui lòng thử lại sau",
      })
    );
  }
}

export default function* () {
  yield all([takeLatest(UserComponentType.GET_USER_POST, getUserSaga)]);
}
