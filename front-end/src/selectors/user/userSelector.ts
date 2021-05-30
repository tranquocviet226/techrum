import { AppState } from "reducers";

export const userSelector = (state: AppState) => ({
  user: state.user.user,
  posts: state.user.posts
});
