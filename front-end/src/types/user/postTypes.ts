import { Action } from "redux";
import { ComponentType } from "types/common/componentTypes";
import { FindPostBody } from "types/model/Post";

export enum PostActionTypeUser {
  GET_POST_FIND = "GET POST FIND",
}

export interface FindPostAction extends Action {
  type: PostActionTypeUser.GET_POST_FIND;
  componentType: ComponentType;
  body: FindPostBody;
}

export type PostActionTypesUser = FindPostAction;
