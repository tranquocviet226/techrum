import { Category } from "types/Post";
import {
  CategoryActionType,
  GetCategoriesAction,
  UpdateListCategoryAction,
} from "types/User/categoryTypes";

export const getListCategory = (): GetCategoriesAction => ({
  type: CategoryActionType.GET_LIST,
});
export const updateListCategory = (
  category: Category[]
): UpdateListCategoryAction => ({
  type: CategoryActionType.UPDATE_LIST,
  categories: category,
});
