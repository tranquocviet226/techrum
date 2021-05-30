import { UserActionTypes, UserComponentType, UserState } from "types/user/userTypes";

const initialState: UserState = {
  user: null,
  posts: []
};

const UserReducer = (
  state: UserState = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case UserComponentType.SET_USER_POST:
      return {
        ...state,
        user: action.user,
        posts: action.posts
      };
    default:
      return state;
  }
};

export default UserReducer;
