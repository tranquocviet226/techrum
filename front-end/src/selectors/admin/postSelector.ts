import { AppState } from "reducers";

export const postSelector = (state: AppState) => ({
  formData: state.posts.formData,
  sliderPosts: state.posts.sliderPosts,
});
