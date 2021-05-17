import { AppState } from "reducers";

export const postSelectorUser = (state: AppState) => ({
  postWeekendTop: state.posts.weekendTop,
  randomPosts: state.posts.randomPosts,
  readNextPosts: state.posts.readNextPosts,
  relatedPosts: state.posts.relatedPosts,
  dontMissPosts: state.posts.dontMissPosts,
  categoryDetailPosts: state.posts.categoryDetailPosts,
});
