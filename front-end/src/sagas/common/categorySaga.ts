import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { updateListCategory } from "actions/common/categoryAction";
import { setLoading } from "actions/common/commonAction";
import { AxiosResponse } from "axios";
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
    }
  } catch (e) {
    console.log("FAILURE", e);
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
      console.log("SUCCESS");
    } else {
      console.log("ERR", response);
      setErrors({ api: response.statusText });
    }
  } catch (e) {
    console.log("FAILURE", e);
  }
  yield put(setLoading(false));
}

export default function* () {
  yield all([
    takeLatest(CategoryActionType.GET_LIST, getListCategorySaga),
    takeLatest(CategoryActionType.CREATE, createCategorySaga),
  ]);
}
