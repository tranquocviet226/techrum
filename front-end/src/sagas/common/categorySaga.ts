import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { updateListCategory } from "actions/common/categoryAction";
import { AxiosResponse } from "axios";
import { CategoryApi } from "services/api";
import { PostApi } from "services/api/admin/postApi";
import {
  CategoryActionType,
  CreateCategoryAction,
} from "types/user/categoryTypes";
import { checkStatus, checkStatusData, parseJSON } from "utils/request";
import { setNotification } from "actions/common/notificationAction";

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
          setNotification({
            type: "success",
            message: "Tạo thể loại thành công!",
          });
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
      } catch (errors) {
        yield put(
          setNotification({ type: "danger", message: errors[0]?.message })
        );
        setErrors({ api: errors?.message });
      }
    }
  } catch (error) {
    yield put(setNotification({ type: "danger", message: error?.message }));
  }
}

export default function* () {
  yield all([
    takeLatest(CategoryActionType.GET_LIST, getListCategorySaga),
    takeLatest(CategoryActionType.CREATE, createCategorySaga),
  ]);
}
