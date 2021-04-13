import { AppState } from "reducers";

export const commonSelector = (state: AppState) => ({
  isLoading: state.common.isLoading,
  isShowModal: state.common.isShowModal,
  categories: state.categories.categories,
});
