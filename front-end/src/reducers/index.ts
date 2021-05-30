import { combineReducers } from "redux";

import authReducer from "./admin/authReducer";
import categoryReducer from "./user/categoryReducer";
import commonReducer from "./common/commonReducer";
import notificationReducer from "./common/notificationReducer";
import postReducer from './admin/postReducer';

const allReducers = combineReducers({
  common: commonReducer,
  auth: authReducer,
  categories: categoryReducer,
  posts: postReducer,
  notification: notificationReducer,
});

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action);
};

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
