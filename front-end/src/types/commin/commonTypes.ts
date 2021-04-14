import { Action } from "redux";

export interface CommonState {
  isLoading: boolean;
  isShowModal: boolean;
}

export enum CommonActionType {
  SET_LOADING = "SET LOADING",
  GET_LOADING = "GET LOADING",
  SET_MODAL = "SET MODAL",
  GET_MODAL = "GET MODAL",
}
export interface SetLoadingAction extends Action {
  type: CommonActionType.SET_LOADING;
  isLoading: boolean;
}

export interface GetLoadingAction extends Action {
  type: CommonActionType.GET_LOADING;
}

export interface SetModalAction extends Action {
  type: CommonActionType.SET_MODAL;
  isShowModal: boolean;
}

export interface GetModalAction extends Action {
  type: CommonActionType.GET_MODAL;
}

export type CommonActionTypes =
  | SetLoadingAction
  | GetLoadingAction
  | SetModalAction
  | GetModalAction;
