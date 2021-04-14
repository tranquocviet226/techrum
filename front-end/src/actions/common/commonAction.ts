import {
  SetLoadingAction,
  CommonActionType,
  GetLoadingAction,
  SetModalAction,
  GetModalAction,
} from "types/commin/commonTypes";

export const getLoading = (): GetLoadingAction => ({
  type: CommonActionType.GET_LOADING,
});

export const setLoading = (isLoading: boolean): SetLoadingAction => ({
  type: CommonActionType.SET_LOADING,
  isLoading: isLoading,
});

export const getShowModal = (): GetModalAction => ({
  type: CommonActionType.GET_MODAL,
});

export const setShowModal = (isShowModal: boolean): SetModalAction => ({
  type: CommonActionType.SET_MODAL,
  isShowModal: isShowModal,
});
