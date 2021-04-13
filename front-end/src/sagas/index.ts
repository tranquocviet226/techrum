import { all, fork } from "redux-saga/effects";

import authSaga from "./admin/authSaga";
import postSaga from "./admin/postSaga";
import categorySaga from "./common/categorySaga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(categorySaga), fork(postSaga)]);
}
