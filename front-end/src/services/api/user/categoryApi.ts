import instance from "../v1";

class Category {
  getList = () => instance.get("/catalog/categories");
}

export const CategoryApi = new Category();
