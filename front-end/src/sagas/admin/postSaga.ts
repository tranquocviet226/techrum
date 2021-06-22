import {
  CreatePostAction,
  DeletePostByIdAction,
  GetPostsByCategoryAction,
  GetPostsByIDAction,
  PostActionType,
  UpdatePostByIdAction,
} from "types/admin/postTypes";
import { AxiosResponse } from "axios";
import { PostApi } from "services/api/admin/postApi";
import { takeLatest, all, put, call, takeEvery } from "redux-saga/effects";
import { checkStatusData, parseJSON } from "utils/request";
import {
  setPostDetail,
  updatePostDelete,
  updatePosts,
} from "actions/admin/postAction";
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
            setNotification({
              type: "success",
              message: "Đăng bài thành công!",
            })
          );
          window.history.back();
        }
      } catch (error) {
        yield put(setNotification({ type: "danger", message: error?.message }));
      }
    } else {
      yield put(
        setNotification({
          type: "danger",
          message: "Không có hình hoặc đăng hình bị lỗi!",
        })
      );
    }
  } catch (error) {
    yield put(setNotification({ type: "danger", message: error?.message }));
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

  } finally {
  }
}

function* deletePostById(action: DeletePostByIdAction) {
  try {
    yield put(setLoading(true));
    const response: AxiosResponse<any> = yield call(
      [PostApi, PostApi.deletePostById],
      action.id
    );
    const data = parseJSON(checkStatusData(response.data));
    if (data) {
      yield put(
        setNotification({
          type: "success",
          message: "Xóa bài viết thành công!",
        })
      );
      yield put(updatePostDelete(action.id, action.componentType));
    }
  } catch (e) {
    yield put(setNotification({ type: "danger", message: e?.message }));
    yield put(setLoading(false));
  } finally {
    yield put(setLoading(false));
  }
}

function* updatePostByIdSaga(action: UpdatePostByIdAction) {
  const { formData } = action;
  const newFormData = new FormData();
  if (typeof formData?.backgroundUrl === "string") {
    const backgroundUrl = formData?.backgroundUrl;
    try {
      const response: AxiosResponse<any> = yield call(
        [PostApi, PostApi.update],
        action.id,
        formData,
        backgroundUrl,
        undefined
      );
      const data = parseJSON(checkStatusData(response.data));
      if (data) {
        yield put(
          setNotification({
            type: "success",
            message: "Cập nhật bài viết thành công!",
          })
        );
        window.history.back();
      }
    } catch (error) {
      yield put(setNotification({ type: "danger", message: error?.message }));
    }
  } else {
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
            [PostApi, PostApi.update],
            action.id,
            formData,
            backgroundUrl,
            backgroundName
          );
          const data = parseJSON(checkStatusData(response.data));
          if (data) {
            yield put(
              setNotification({
                type: "success",
                message: "Cập nhật bài viết thành công!",
              })
            );
            window.history.back();
          }
        } catch (error) {
          yield put(
            setNotification({ type: "danger", message: error?.message })
          );
        }
      } else {
        yield put(
          setNotification({ type: "danger", message: "Something went wrong!" })
        );
      }
    } catch (error) {
      yield put(setNotification({ type: "danger", message: error?.message }));
    }
  }
}

export default function* () {
  yield all([
    takeLatest(PostActionType.CREATE_POST, createPostSaga),
    takeEvery(PostActionType.GET_POSTS_BY_CATEGORY, getPostsByCategorySaga),
    takeEvery(PostActionType.GET_POSTS_BY_ID, getPostsById),
    takeEvery(PostActionType.DELETE_POST_BY_ID, deletePostById),
    takeEvery(PostActionType.UPDATE_POST_BY_ID, updatePostByIdSaga),
  ]);
}
