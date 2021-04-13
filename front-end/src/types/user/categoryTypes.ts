import { FormValueCategory } from "components/admin/category/categoryComponents/CategoryForm";
import { FormikErrors } from "formik";
import { Action } from "redux";
import { Category } from "types/model";

export interface CategoryState {
  categories: Category[];
}

export enum CategoryActionType {
  GET_LIST = "GET LIST CATEGORY",
  UPDATE_LIST = "UPDATE LIST CATEGORY",
  CREATE = "CREATE CATEGORY"
}
export interface GetCategoriesAction extends Action {
  type: CategoryActionType.GET_LIST;
}

export interface UpdateListCategoryAction extends Action {
  type: CategoryActionType.UPDATE_LIST;
  categories: Category[];
}

export interface CreateCategoryAction extends Action {
  type: CategoryActionType.CREATE;
  category: Category;
  setErrors: (errors: FormikErrors<FormValueCategory>) => void;
}

export type CategoryActionTypes =
  | GetCategoriesAction
  | UpdateListCategoryAction
  | CreateCategoryAction
