import {
  CategoryActionType,
  CategoryActionTypes,
  CategoryState,
} from "types/user/categoryTypes";
import { DataCategory } from "data";

const initialState: CategoryState = {
  categories: DataCategory,
};

const auth = (
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

export default auth;
