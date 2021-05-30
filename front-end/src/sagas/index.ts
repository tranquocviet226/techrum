import { all, fork } from "redux-saga/effects";

import authSaga from "./admin/authSaga";
import postSaga from "./admin/postSaga";
import categorySaga from "./common/categorySaga";
import postSagaUser from "./user/postSagaUser";
import getUserSaga from "./user/userSaga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(categorySaga),
    fork(postSaga),
    fork(postSagaUser),
    fork(getUserSaga)
  ]);
}
