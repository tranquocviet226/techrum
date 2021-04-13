import {
  CategoryActionType,
  CategoryActionTypes,
  CategoryState,
} from "types/user/categoryTypes";
import { DataCategory } from "data";

const initialState: CategoryState = {
  categories: DataCategory,
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
    // case CategoryActionType.CREATE:
    //   return {
    //     ...state,
    //     categories: [...state.categories, action.category],
    //   };
    default:
      return state;
  }
};

export default category;
