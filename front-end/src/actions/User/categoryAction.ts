import { Category } from "types/model";
import {
  CategoryActionType,
  GetCategoriesAction,
  UpdateListCategoryAction,
} from "types/user/categoryTypes";

export const getListCategory = (): GetCategoriesAction => ({
  type: CategoryActionType.GET_LIST,
});
export const updateListCategory = (
  category: Category[]
): UpdateListCategoryAction => ({
  type: CategoryActionType.UPDATE_LIST,
  categories: category,
});
