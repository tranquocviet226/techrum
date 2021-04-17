import instance from "../v1";

class _PostApi {
  create = (formData: any) =>
    instance.post("/catalog/posts", {
      title: formData.title,
      content: formData.content,
      category_id: formData.category,
      updated_at: formData.postData,
      description: formData.description,
      sort_description: formData.sortDescription,
      background_url: "formData.backgroundUrl",
      slug: formData.slug,
      is_active: 1,
    });
}

export const PostApi = new _PostApi();
