import { takeLatest } from "redux-saga/effects";

import { CounterActionType } from "../types/counterTypes";

export function* counterSagas() {
  try {
    // Some thing with service
    // yield put(somethingAction);
  } catch (e) {
    // handle errors
  }
}

export default function* counterSaga() {
  yield takeLatest(CounterActionType.INCREMENT, counterSagas);
}
