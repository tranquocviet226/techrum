import { updatePosts } from "actions/admin/postAction";
import { AxiosResponse } from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { PostApiUser } from "services/api/user/postApiUser";
import { FindPostAction, PostActionTypeUser } from "types/user/postTypes";
import { checkStatusData, parseJSON } from "utils/request";
import { setNotification } from "actions/common/notificationAction";

function* getPostFindSaga(action: FindPostAction) {
  const { componentType, body } = action;
  try {
    const response: AxiosResponse<any> = yield call(
      [PostApiUser, PostApiUser.getList],
      body
    );
    const data = parseJSON(checkStatusData(response.data));

    if (data) {
      yield put(updatePosts(componentType, data));
    }
  } catch (error) {
     yield put(setNotification({ type: "danger", message: error.message }));
  }
}

export default function* () {
  yield all([takeEvery(PostActionTypeUser.GET_POST_FIND, getPostFindSaga)]);
}
