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
  categorySecondPosts: [],
  postDetail: null,
  ratingPosts: [],
  weekendTop: [],
  randomPosts: [],
  readNextPosts: [],
  relatedPosts: [],
  dontMissPosts: [],
  categoryDetailPosts: [],
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
    case ComponentType.CATEGORY_POSTS_2:
      return {
        categorySecondPosts: action.posts,
      };
    case ComponentType.RATING_POSTS:
      return {
        ratingPosts: action.posts,
      };
    case ComponentType.WEEKEND_TOP:
      return {
        weekendTop: action.posts,
      };
    case ComponentType.RANDOM_POSTS:
      return {
        randomPosts: action.posts,
      };
    case ComponentType.READ_NEXT_POSTS:
      return {
        readNextPosts: action.posts,
      };
    case ComponentType.RELATED_POSTS:
      return {
        relatedPosts: action.posts,
      };
    case ComponentType.DON_T_MISS_POSTS:
      return {
        dontMissPosts: action.posts,
      };
    case ComponentType.CATEGORY_DETAIL:
      return {
        categoryDetailPosts: action.posts,
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
