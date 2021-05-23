import axios from "axios";
import { APP_URL } from "constants/index";
import { ParamsPost } from "types/model/Post";
import instance from "../v1";

class _PostApi {
  create = (formData: any, backgroundUrl: string, backgroundName: string) =>
    instance.post("/catalog/posts", {
      title: formData.title,
      content: formData.content,
      category_id: formData.category,
      updated_at: formData.postDate,
      description: formData.description,
      sort_description: formData.sortDescription,
      background_url: backgroundUrl,
      background_name: backgroundName,
      slug: formData.slug,
      is_active: 1,
    });
  update = (
    id: number,
    formData: any,
    backgroundUrl: string,
    backgroundName: any
  ) =>
    instance.put(`/catalog/posts/${id}`, {
      title: formData.title,
      content: formData.content,
      category_id: formData.category,
      updated_at: formData.postDate,
      description: formData.description,
      sort_description: formData.sortDescription,
      background_url: backgroundUrl,
      background_name: backgroundName,
      slug: formData.slug,
      is_active: 1,
    });
  uploadFile = (file: FormData) =>
    axios({
      method: "post",
      url: APP_URL.concat("upload"),
      data: file,
    })
      .then(function (response) {
        return response;
      })
      .catch(function (response) {
        return response;
      });
  getPostsById = (id: number) => instance.get(`/catalog/posts/${id}`);
  getPosts = (paramsPost?: ParamsPost) =>
    instance.get("/catalog/posts", {
      params: {
        ...paramsPost,
      },
    });
  deletePostById = (id: number) => instance.delete(`/catalog/posts/${id}`);
}

export const PostApi = new _PostApi();
