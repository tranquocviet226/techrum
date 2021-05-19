import {
  CreatePostAction,
  GetPostsByCategoryAction,
  GetPostsByIDAction,
  PostActionType,
} from "types/admin/postTypes";
import { AxiosResponse } from "axios";
import { PostApi } from "services/api/admin/postApi";
import { takeLatest, all, put, call, takeEvery } from "redux-saga/effects";
import { checkStatusData, parseJSON } from "utils/request";
import { setPostDetail, updatePosts } from "actions/admin/postAction";
import { setLoading } from "actions/common/commonAction";

function* createPostSaga(action: CreatePostAction) {
  const { formData } = action;
  const newFormData = new FormData();
  newFormData.append("file", formData?.backgroundUrl);
  try {
    const response: AxiosResponse<any> = yield call(
      [PostApi, PostApi.uploadFile],
      newFormData
    );
    const data = response?.data;
    if (data) {
      const backgroundUrl = data?.link;
      const backgroundName = data?.file_name;
      try {
        const response: AxiosResponse<any> = yield call(
          [PostApi, PostApi.create],
          formData,
          backgroundUrl,
          backgroundName
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

function* getPostsById(action: GetPostsByIDAction) {
  try {
    yield put(setLoading(true));
    const response: AxiosResponse<any> = yield call(
      [PostApi, PostApi.getPostsById],
      action.id
    );
    const data = parseJSON(checkStatusData(response.data));
    if (data) {
      yield put(setPostDetail(data));
    }
  } catch (e) {
    // errors by server response, setErrors of formik
    console.log("ERROR", e.message);
  } finally {
    yield put(setLoading(false));
  }
}

function* getPostsByCategorySaga(action: GetPostsByCategoryAction) {
  try {
    const response: AxiosResponse<any> = yield call(
      [PostApi, PostApi.getPosts],
      action.paramsPost
    );
    const data = parseJSON(checkStatusData(response.data));
    if (data) {
      yield put(updatePosts(action.componentType, data));
    }
  } catch (e) {
    // errors by server response, setErrors of formik
    console.log("ERROR", e.message);
  } finally {

  }
}

export default function* () {
  yield all([
    takeLatest(PostActionType.CREATE_POST, createPostSaga),
    takeEvery(PostActionType.GET_POSTS_BY_CATEGORY, getPostsByCategorySaga),
    takeEvery(PostActionType.GET_POSTS_BY_ID, getPostsById),
  ]);
}
