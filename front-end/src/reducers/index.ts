import { combineReducers } from "redux";

import authReducer from "./authReducer";
import categoryReducer from "./User/categoryReducer";

const allReducers = combineReducers({
  auth: authReducer,
  categories: categoryReducer,
});

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action);
};

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
