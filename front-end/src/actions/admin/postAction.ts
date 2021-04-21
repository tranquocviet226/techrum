import {
  CreatePostAction,
  PostActionType,
  UploadFileAction,
  GetPostsByCategoryAction,
  ResetPostsAction,
  UpdatePostsAction,
} from "types/admin/postTypes";
import { ComponentType } from "types/common/componentTypes";
import { Post } from "types/model";

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

export const getPostsByCategory = (
  componentType: ComponentType,
  categoryId?: string
): GetPostsByCategoryAction => ({
  type: PostActionType.GET_POSTS_BY_CATEGORY,
  componentType,
  categoryId,
});

export const updatePosts = (
  componentType: ComponentType,
  posts: Post[]
): UpdatePostsAction => ({
  type: PostActionType.UPDATE_POSTS,
  componentType,
  posts,
});
