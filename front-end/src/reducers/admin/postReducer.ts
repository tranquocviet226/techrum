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
  newContentPosts: [],
  categoryFirstPosts: [],
  postDetail: null,
  ratingPosts: [],
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
    case PostActionType.SET_POST_DETAIL:
      return {
        ...state,
        postDetail: action.post,
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
    case ComponentType.NEW_CONTENT_POSTS:
      return {
        newContentPosts: action.posts,
      };
    case ComponentType.CATEGORY_POSTS_1:
      return {
        categoryFirstPosts: action.posts,
      };
    case ComponentType.RATING_POSTS:
      return {
        ratingPosts: action.posts,
      };
  }
};

const postsResetByComponent = (action: ResetPostsAction) => {
  switch (action.componentType) {
    case ComponentType.SLIDER_POSTS:
      return {
        sliderPosts: [],
      };
    case ComponentType.NEW_CONTENT_POSTS:
      return {
        newContentPosts: [],
      };
    case ComponentType.CATEGORY_POSTS_1:
      return {
        categoryFirstPosts: [],
      };
  }
};
