import { AppState } from "../reducers";

export const counterSelector = (state: AppState) => ({
  count: state.counter.count,
});
