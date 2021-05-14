import { AppState } from "reducers";

export const postSelector = (state: AppState) => ({
  formData: state.posts.formData,
  sliderPosts: state.posts.sliderPosts,
  newContentPosts: state.posts.newContentPosts,
  categoryFirstPosts: state.posts.categoryFirstPosts,
  categories: state.categories.categories,
  postDetail: state.posts.postDetail,
  ratingPosts: state.posts.ratingPosts,
});
