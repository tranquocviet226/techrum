import {
  all,
  call,
  put,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { updateListCategory } from "actions/common/categoryAction";
import { setNotification } from "actions/common/notificationAction";
import { AxiosResponse } from "axios";
import { CategoryApi, UploadApi } from "services/api";
import { PostApi } from "services/api/admin/postApi";
import {
  CategoryActionType,
  CreateCategoryAction,
  DeleteCategoryByIdAction,
  UpdateCategoryByIdAction,
} from "types/user/categoryTypes";
import { checkStatus, checkStatusData, parseJSON } from "utils/request";

function* getListCategorySaga() {
  try {
    const response: AxiosResponse<any> = yield call([
      CategoryApi,
      CategoryApi.getList,
    ]);

    const data = parseJSON(checkStatus(response));
    if (data) {
      yield put(updateListCategory(data.data));
    } else {
    }
  } catch (e) {}
}

function* createCategorySaga(action: CreateCategoryAction) {
  const { category, setErrors } = action;
  const newFormData = new FormData();
  newFormData.append("file", category?.background_url);

  try {
    const response: AxiosResponse<any> = yield call(
      [PostApi, PostApi.uploadFile],
      newFormData
    );
    const data = response?.data;
    if (data) {
      const backgroundUrl = data?.link;
      try {
        const response: AxiosResponse<any> = yield call(
          [CategoryApi, CategoryApi.create],
          category,
          backgroundUrl
        );

        const data = parseJSON(checkStatusData(response.data));
        if (data) {
          yield put(
            setNotification({
              type: "success",
              message: "Tạo thể loại thành công!",
            })
          );
          window.location.reload();
        } else {
          yield put(
            setNotification({
              type: "danger",
              message: data?.errors[0]?.message,
            })
          );
          setErrors({ api: data?.errors[0]?.message });
        }
      } catch (error) {
        yield put(setNotification({ type: "danger", message: error?.message }));
        setErrors({ api: error?.message });
      }
    }
  } catch (error) {
    yield put(setNotification({ type: "danger", message: error?.message }));
  }
}

function* updateCategoryByIdSaga(action: UpdateCategoryByIdAction) {
  const backgroundFile = action?.formData?.backgroundImageFile;
  const newFormData = new FormData();
  newFormData.append("file", backgroundFile);
  try {
    const response: AxiosResponse<any> = yield call(
      [UploadApi, UploadApi.uploadFile],
      newFormData
    );
    const data = response?.data;
    if (data) {
      const background_url = data?.link;
      try {
        const response: AxiosResponse<any> = yield call(
          [CategoryApi, CategoryApi.update],
          action.id,
          action.formData,
          background_url
        );
        const data = parseJSON(checkStatusData(response.data));
        if (data) {
          yield put(
            setNotification({
              type: "success",
              message: "Cập nhật danh mục thành công!",
            })
          );
          window.location.reload();
        }
      } catch (error) {
        yield put(setNotification({ type: "danger", message: error?.message }));
      }
    }
  } catch (error) {
    yield put(setNotification({ type: "danger", message: error?.message }));
  }
}

function* deleteCategoryByIdSaga(action: DeleteCategoryByIdAction) {
  try {
    const response: AxiosResponse<any> = yield call(
      [CategoryApi, CategoryApi.delete],
      action.id
    );
    const data = response?.data;
    if (data) {
      yield put(
        setNotification({
          type: "success",
          message: "Xóa danh mục thành công!",
        })
      );
      window.location.reload();
    }
  } catch (error) {
    yield put(setNotification({ type: "danger", message: error?.message }));
  }
}

export default function* () {
  yield all([
    takeLatest(CategoryActionType.GET_LIST, getListCategorySaga),
    takeLatest(CategoryActionType.CREATE, createCategorySaga),
    takeEvery(CategoryActionType.UPDATE_BY_ID, updateCategoryByIdSaga),
    takeEvery(CategoryActionType.DELETE_BY_ID, deleteCategoryByIdSaga),
  ]);
}
