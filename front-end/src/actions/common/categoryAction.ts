import { FormValueCategory } from "components/admin/category/categoryComponents/CategoryForm";
import { FormikErrors } from "formik";
import { Category } from "types/model";
import {
  CategoryActionType,
  GetCategoriesAction,
  UpdateListCategoryAction,
  CreateCategoryAction,
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

export const createCategory = (
  category: Category,
  setErrors: (errors: FormikErrors<FormValueCategory>) => void,
): CreateCategoryAction => ({
  type: CategoryActionType.CREATE,
  category: category,
  setErrors,
});
