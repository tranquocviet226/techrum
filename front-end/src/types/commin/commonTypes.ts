import { Action } from "redux";

export interface CommonState {
  isLoading: boolean;
}

export enum CommonActionType {
  SET_LOADING = "SET LOADING",
  GET_LOADING = "GET LOADING",
}
export interface SetLoadingAction extends Action {
  type: CommonActionType.SET_LOADING;
  isLoading: boolean;
}

export interface GetLoadingAction extends Action {
  type: CommonActionType.GET_LOADING;
}

export type CommonActionTypes = SetLoadingAction | GetLoadingAction;
