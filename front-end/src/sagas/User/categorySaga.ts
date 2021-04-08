import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { updateListCategory } from "actions/User/categoryAction";
import { AxiosResponse } from "axios";
import { CategoryApi } from "services/api";
import { CategoryActionType } from "types/User/categoryTypes";
import { checkStatus, parseJSON } from "utils/request";

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
  } catch (e) {
    console.log("FAILURE", e);
  }
}

export default function* () {
  yield all([takeLatest(CategoryActionType.GET_LIST, getListCategorySaga)]);
}
