import { AppState } from "reducers";

export const commonSelector = (state: AppState) => ({
  isLoading: state.common.isLoading
});
