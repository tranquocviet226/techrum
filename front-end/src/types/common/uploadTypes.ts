import { Action } from "redux";

export enum UploadActionType {
  UPLOAD_FILE = "UPLOAD FILE",
}

export interface UploadFileAction extends Action {
  type: UploadActionType.UPLOAD_FILE;
  file: any;
}

export type UploadActionTypes = UploadFileAction;
