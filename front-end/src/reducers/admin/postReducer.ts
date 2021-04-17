import { PostActionTypes, PostState } from "types/admin/postTypes";
const initialState: PostState = {
  formData: null,
};

const postReducer = (
  state: PostState = initialState,
  action: PostActionTypes
): PostState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postReducer;
