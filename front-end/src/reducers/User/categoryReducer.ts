import {
  CategoryActionType,
  CategoryActionTypes,
  CategoryState,
} from "types/User/categoryTypes";

const initialState: CategoryState = {
  categories: [],
};

const auth = (
  state: CategoryState = initialState,
  action: CategoryActionTypes
): CategoryState => {
  switch (action.type) {
    case CategoryActionType.UPDATE_LIST:
      console.log("STATE", action.categories);
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};

export default auth;
