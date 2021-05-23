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
import { setNotification } from "actions/common/notificationAction";

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
           yield put(
             setNotification({ type: "success", message: "Đăng bài thành công!" })
           );
          window.location.reload();
        }
      } catch (error) {
        yield put(setNotification({ type: "danger", message: error?.message }));
        console.log(error);
      }
    } else {
         yield put(
           setNotification({ type: "danger", message: "Không có hình hoặc đăng hình bị lỗi!"})
         );
      console.log("EROP");
    }
  } catch (e) {
      yield put(setNotification({ type: "danger", message: e.message }));
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
      yield put(setNotification({ type: "danger", message: e?.message }));
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
    yield put(setNotification({ type: "danger", message: e?.message }));
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
