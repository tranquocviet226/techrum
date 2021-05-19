import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { updateListCategory } from "actions/common/categoryAction";
import { AxiosResponse } from "axios";
import { DataCategory } from "data";
import { CategoryApi } from "services/api";
import {
  CategoryActionType,
  CreateCategoryAction
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
      yield put(updateListCategory(DataCategory));
    }
  } catch (e) {
    yield put(updateListCategory(DataCategory));
  }
}

function* createCategorySaga(action: CreateCategoryAction) {
  const { category, setErrors } = action;

  try {
    const response: AxiosResponse<any> = yield call(
      [CategoryApi, CategoryApi.create],
      category
    );

    const data = parseJSON(checkStatusData(response.data));
    if (data) {
      window.location.reload();
    } else {
      setErrors({ api: data?.errors[0]?.message });
    }
  } catch (e) {
    setErrors({ api: e?.message });
  }
}

export default function* () {
  yield all([
    takeLatest(CategoryActionType.GET_LIST, getListCategorySaga),
    takeLatest(CategoryActionType.CREATE, createCategorySaga),
  ]);
}
