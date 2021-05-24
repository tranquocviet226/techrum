import { Category } from "types/model";
import instance from "../v1";

class _CategoryApi {
  getList = () => instance.get("/catalog/categories");
  create = (category: Category, background_url: string) =>
    instance.post("/catalog/categories", {
      title: category.title,
      background_url: background_url,
      slug: category.slug,
      parent_id: category.parent_id,
      color: category.color,
      position: category.position,
      is_active: category.is_active,
      is_searchable: 1,
    });
  update = (id: number, category: Category, background_url: string) =>
    instance.put(`/catalog/categories/${id}`, {
      title: category.title,
      background_url: background_url,
      slug: category.slug,
      color: category.color,
      position: category.position,
      is_active: category.is_active,
    });
  delete = (id: number) => instance.delete(`/catalog/categories/${id}`);
}

export const CategoryApi = new _CategoryApi();
