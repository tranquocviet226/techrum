import { combineReducers } from "redux";

import authReducer from "./authReducer";

const allReducers = combineReducers({
  auth: authReducer,
});

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action);
};

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
