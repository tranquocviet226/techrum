import { AppState } from "reducers";

export const categorySelector = (state: AppState) => ({
  categories: state.categories.categories
});
