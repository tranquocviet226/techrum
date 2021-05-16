import { ComponentType } from "types/common/componentTypes";
import { FindPostBody } from "types/model/Post";
import { FindPostAction, PostActionTypeUser } from "types/user/postTypes";

export const getPostFind = (
  componentType: ComponentType,
  body: FindPostBody
): FindPostAction => ({
  type: PostActionTypeUser.GET_POST_FIND,
  componentType: componentType,
  body: body,
});
