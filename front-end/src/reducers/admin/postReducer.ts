import {
  PostActionType,
  PostActionTypes,
  PostState,
  ResetPostsAction,
  UpdatePostsAction,
} from "types/admin/postTypes";
import { ComponentType } from "types/common/componentTypes";
const initialState: PostState = {
  formData: null,
  sliderPosts: [],
};

const postReducer = (
  state: PostState = initialState,
  action: PostActionTypes
): PostState => {
  switch (action.type) {
    case PostActionType.UPDATE_POSTS:
      return {
        ...state,
        ...postsByComponent(action),
      };
    case PostActionType.RESET_POSTS:
      return {
        ...state,
        ...postsResetByComponent(action),
      };
    default:
      return state;
  }
};

export default postReducer;

const postsByComponent = (action: UpdatePostsAction) => {
  switch (action.componentType) {
    case ComponentType.SLIDER_POSTS:
      return {
        sliderPosts: action.posts,
      };
  }
};

const postsResetByComponent = (action: ResetPostsAction) => {
  switch (action.componentType) {
    case ComponentType.SLIDER_POSTS:
      return {
        sliderPosts: [],
      };
  }
};
