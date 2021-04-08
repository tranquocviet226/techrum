import { all, fork } from "redux-saga/effects";

import authSaga from "./admin/authSaga";
import categorySaga from './user/categorySaga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(categorySaga)]);
}
