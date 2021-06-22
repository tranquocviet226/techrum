import { User } from "entities/User";
import { Action } from "redux";
import { Post } from "types/model";

export interface UserState {
    user: User | null;
    posts: Post[]
  }

export enum UserComponentType {
  GET_USER_POST = "GET USER POST",
  SET_USER_POST = "SET USER POST"
}

export interface GetUserPost extends Action {
  type: UserComponentType.GET_USER_POST;
}

export interface SetUserPost extends Action {
    type: UserComponentType.SET_USER_POST;
    user: User;
    posts: Post[];
  }

export type UserActionTypes = GetUserPost | SetUserPost;
