import {
  CommonActionType,
  CommonActionTypes,
  CommonState,
} from "types/commin/commonTypes";

const initialState: CommonState = {
  isLoading: false,
  isShowModal: false,
};

const common = (
  state: CommonState = initialState,
  action: CommonActionTypes
): CommonState => {
  switch (action.type) {
    case CommonActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case CommonActionType.GET_LOADING:
      return state;
    case CommonActionType.SET_MODAL:
      return {
        ...state,
        isShowModal: action.isShowModal
      }
    default:
      return state;
  }
};

export default common;
