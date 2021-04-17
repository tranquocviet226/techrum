import { CreatePostAction, PostActionType } from "types/admin/postTypes";

export const createPost = (formData: any): CreatePostAction => ({
  type: PostActionType.CREATE_POST,
  formData: formData,
});
