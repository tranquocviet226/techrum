import { Action } from "redux";
import { ComponentType } from "types/common/componentTypes";
import { Post } from "types/model";
import { ParamsPost } from "types/model/Post";

export interface PostState {
  formData: any;
  sliderPosts: Post[];
  newContentPosts: Post[];
  categoryFirstPosts: Post[];
}

export enum PostActionType {
  CREATE_POST = "CREATE POST",
  UPLOAD_FILE = "UPLOAD FILE",
  GET_POSTS_BY_CATEGORY = "GET_POSTS_BY_CATEGORY",
  UPDATE_POSTS = "UPDATE_POSTS",
  RESET_POSTS = "RESET_POSTS",
}

export interface CreatePostAction extends Action {
  type: PostActionType.CREATE_POST;
  formData: any;
}

export interface UploadFileAction extends Action {
  type: PostActionType.UPLOAD_FILE;
  file: FormData;
}

export interface GetPostsByCategoryAction extends Action {
  type: PostActionType.GET_POSTS_BY_CATEGORY;
  componentType: ComponentType;
  paramsPost?: ParamsPost;
}

export interface UpdatePostsAction extends Action {
  type: PostActionType.UPDATE_POSTS;
  componentType: ComponentType;
  posts: Post[];
}

export interface ResetPostsAction extends Action {
  type: PostActionType.RESET_POSTS;
  componentType: ComponentType;
}

export type PostActionTypes =
  | CreatePostAction
  | UploadFileAction
  | GetPostsByCategoryAction
  | ResetPostsAction
  | UpdatePostsAction;
