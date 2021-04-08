import { combineReducers } from "redux";

import authReducer from "./admin/authReducer";
import categoryReducer from "./user/categoryReducer";

const allReducers = combineReducers({
  auth: authReducer,
  categories: categoryReducer,
});

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action);
};

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
