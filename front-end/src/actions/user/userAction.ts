import { User } from "entities/User";
import { Post } from "types/model";
import {
  GetUserPost,
  SetUserPost,
  UserComponentType,
} from "types/user/userTypes";

export const getUser = (): GetUserPost => ({
  type: UserComponentType.GET_USER_POST,
});

export const setUser = (
  user: User,
  posts: Post[]
): SetUserPost => ({
  type: UserComponentType.SET_USER_POST,
  user: user,
  posts: posts,
});
