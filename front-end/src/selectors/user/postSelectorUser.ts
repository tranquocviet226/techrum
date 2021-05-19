import { AppState } from "reducers";

export const postSelectorUser = (state: AppState) => ({
  categories: state.categories.categories,
  postWeekendTop: state.posts.weekendTop,
  newContentPosts: state.posts.newContentPosts,
  randomPosts: state.posts.randomPosts,
  categorySecondPosts: state.posts.categorySecondPosts,
  readNextPosts: state.posts.readNextPosts,
  relatedPosts: state.posts.relatedPosts,
  dontMissPosts: state.posts.dontMissPosts,
  categoryDetailPosts: state.posts.categoryDetailPosts,
});
