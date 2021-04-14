import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { updateListCategory } from "actions/common/categoryAction";
import { setLoading } from "actions/common/commonAction";
import { AxiosResponse } from "axios";
import { DataCategory } from "data";
import { CategoryApi } from "services/api";
import {
  CategoryActionType,
  CreateCategoryAction,
} from "types/user/categoryTypes";
import { checkStatus, checkStatusData, parseJSON } from "utils/request";

function* getListCategorySaga() {
  yield put(setLoading(true));
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
  yield put(setLoading(false));
}

function* createCategorySaga(action: CreateCategoryAction) {
  const { category, setErrors } = action;
  yield put(setLoading(true));
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
  yield put(setLoading(false));
}

export default function* () {
  yield all([
    takeLatest(CategoryActionType.GET_LIST, getListCategorySaga),
    takeLatest(CategoryActionType.CREATE, createCategorySaga),
  ]);
}
