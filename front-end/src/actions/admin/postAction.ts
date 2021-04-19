import { CreatePostAction, PostActionType, UploadFileAction } from "types/admin/postTypes";

export const createPost = (formData: any): CreatePostAction => ({
  type: PostActionType.CREATE_POST,
  formData: formData,
});

export const uploadFile = (file: FormData): UploadFileAction => ({
  type: PostActionType.UPLOAD_FILE,
  file: file
})