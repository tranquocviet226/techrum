import {
  CategoryActionType,
  CategoryActionTypes,
  CategoryState,
} from "types/user/categoryTypes";

const initialState: CategoryState = {
  categories: [],
};

const category = (
  state: CategoryState = initialState,
  action: CategoryActionTypes
): CategoryState => {
  switch (action.type) {
    case CategoryActionType.UPDATE_LIST:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};

export default category;
