import { Action } from "redux";
import { Category } from "types/Post";

export interface CategoryState {
  categories: Category[];
}

export enum CategoryActionType {
  GET_LIST = "GET LIST CATEGORY",
  UPDATE_LIST = "UPDATE LIST CATEGORY",
}
export interface GetCategoriesAction extends Action {
  type: CategoryActionType.GET_LIST;
}

export interface UpdateListCategoryAction extends Action {
  type: CategoryActionType.UPDATE_LIST;
  categories: Category[];
}

export type CategoryActionTypes =
  | GetCategoriesAction
  | UpdateListCategoryAction;
