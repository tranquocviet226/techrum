import {
  CreatePostAction,
  GetPostsByCategoryAction,
  PostActionType,
} from "types/admin/postTypes";
import { AxiosResponse } from "axios";
import { PostApi } from "services/api/admin/postApi";
import { takeLatest, all, put, call } from "redux-saga/effects";
import { checkStatusData, parseJSON } from "utils/request";
import { updatePosts } from "actions/admin/postAction";

function* createPostSaga(action: CreatePostAction) {
  const { formData } = action;
  const newFormData = new FormData();
  newFormData.append("file", formData?.backgroundUrl);
  try {
    const response: AxiosResponse<any> = yield call(
      [PostApi, PostApi.uploadFile],
      newFormData
    );

    const data = checkStatusData(response.data);
    if (data) {
      const backgroundUrl = data?.data?.path;
      try {
        const response: AxiosResponse<any> = yield call(
          [PostApi, PostApi.create],
          formData,
          backgroundUrl
        );
        const data = parseJSON(checkStatusData(response.data));
        if (data) {
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("EROP");
    }
  } catch (e) {
    // errors by server response, setErrors of formik
    console.log("ERROR", e.message);
  }
}

function* getPostsByCategorySaga(action: GetPostsByCategoryAction) {
  try {
    const response: AxiosResponse<any> = yield call(
      [PostApi, PostApi.getPosts],
      action.categoryId
    );
    const data = parseJSON(checkStatusData(response.data));
    if (data) {
      yield put(updatePosts(action.componentType, data));
    }
  } catch (e) {
    // errors by server response, setErrors of formik
    console.log("ERROR", e.message);
  }
}

export default function* () {
  yield all([
    takeLatest(PostActionType.CREATE_POST, createPostSaga),
    takeLatest(PostActionType.GET_POSTS_BY_CATEGORY, getPostsByCategorySaga),
  ]);
}
