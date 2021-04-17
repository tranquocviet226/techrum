import { CreatePostAction, PostActionType } from "types/admin/postTypes";
import { AxiosResponse } from "axios";
import { PostApi } from "services/api/admin/postApi";
import { takeLatest, all, put, call } from "redux-saga/effects";
import { checkStatusData, parseJSON } from "utils/request";

function* createPostSaga(action: CreatePostAction) {
  const { formData } = action;
  try {
    const response: AxiosResponse<any> = yield call(
      [PostApi, PostApi.create],
      formData
    );
    const data = parseJSON(checkStatusData(response.data));
    if (data) {
      console.log("SUCCESS");
    } else {
      console.log("EROP");
    }
  } catch (e) {
    // errors by server response, setErrors of formik
    console.log("ERROR", e.message);
  }
}

export default function* () {
  yield all([takeLatest(PostActionType.CREATE_POST, createPostSaga)]);
}
