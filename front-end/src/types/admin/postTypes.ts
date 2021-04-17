import { Action } from "redux";

export interface PostState {
  formData: any;
}

export enum PostActionType {
  CREATE_POST = "CREATE POST",
}

export interface CreatePostAction extends Action {
  type: PostActionType.CREATE_POST;
  formData: any;
}

export type PostActionTypes = CreatePostAction;
