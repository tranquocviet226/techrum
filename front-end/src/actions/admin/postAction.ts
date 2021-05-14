import {
  CreatePostAction,
  PostActionType,
  UploadFileAction,
  GetPostsByCategoryAction,
  ResetPostsAction,
  UpdatePostsAction,
  GetPostsByIDAction,
  SetPostDetailAction,
} from "types/admin/postTypes";
import { ComponentType } from "types/common/componentTypes";
import { Post } from "types/model";
import { ParamsPost } from "types/model/Post";

export const createPost = (formData: any): CreatePostAction => ({
  type: PostActionType.CREATE_POST,
  formData: formData,
});

export const uploadFile = (file: FormData): UploadFileAction => ({
  type: PostActionType.UPLOAD_FILE,
  file: file,
});

export const resetPosts = (componentType: ComponentType): ResetPostsAction => ({
  type: PostActionType.RESET_POSTS,
  componentType,
});

export const getPostById = (id: number): GetPostsByIDAction => ({
  type: PostActionType.GET_POSTS_BY_ID,
  id,
});

export const getPostsByCategory = (
  componentType: ComponentType,
  paramsPost?: ParamsPost
): GetPostsByCategoryAction => ({
  type: PostActionType.GET_POSTS_BY_CATEGORY,
  componentType,
  paramsPost,
});

export const updatePosts = (
  componentType: ComponentType,
  posts: Post[]
): UpdatePostsAction => ({
  type: PostActionType.UPDATE_POSTS,
  componentType,
  posts,
});

export const setPostDetail = (
  post: Post
): SetPostDetailAction => ({
  type: PostActionType.SET_POST_DETAIL,
  post,
});
