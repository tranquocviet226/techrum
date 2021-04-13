import {
  SetLoadingAction,
  CommonActionType,
  GetLoadingAction,
} from "types/commin/commonTypes";

export const getLoading = (): GetLoadingAction => ({
  type: CommonActionType.GET_LOADING,
});

export const setLoading = (isLoading: boolean): SetLoadingAction => ({
  type: CommonActionType.SET_LOADING,
  isLoading: isLoading,
});
