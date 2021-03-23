import { combineReducers } from "redux";

import counterReducer from "./counterReducer";

const allReducers = combineReducers({
  counter: counterReducer,
});

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action);
};

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;