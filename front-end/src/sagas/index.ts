import { all, fork } from "redux-saga/effects";

import counterSaga from "./counterSaga";

export default function* rootSaga() {
  yield all([fork(counterSaga)]);
}
