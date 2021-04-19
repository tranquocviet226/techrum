import { Action } from "redux";

export interface PostState {
  formData: any;
}

export enum PostActionType {
  CREATE_POST = "CREATE POST",
  UPLOAD_FILE = "UPLOAD FILE",
}

export interface CreatePostAction extends Action {
  type: PostActionType.CREATE_POST;
  formData: any;
}

export interface UploadFileAction extends Action {
  type: PostActionType.UPLOAD_FILE;
  file: FormData;
}

export type PostActionTypes = CreatePostAction | UploadFileAction;
