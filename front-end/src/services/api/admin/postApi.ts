import axios from "axios";
import { ParamsPost } from "types/model/Post";
import instance from "../v1";

const config = { headers: { "Content-Type": "multipart/form-data" } };

class _PostApi {
  create = (formData: any, backgroundUrl: string) =>
    instance.post("/catalog/posts", {
      title: formData.title,
      content: formData.content,
      category_id: formData.category,
      updated_at: formData.postData,
      description: formData.description,
      sort_description: formData.sortDescription,
      background_url: backgroundUrl,
      slug: formData.slug,
      is_active: 1,
    });
  uploadFile = (file: FormData) =>
    axios({
      method: "post",
      url: "http://localhost:3000/upload",
      data: file,
    })
      .then(function (response) {
        return response;
      })
      .catch(function (response) {
        return response;
      });

  getPosts = (paramsPost?: ParamsPost) =>
    instance.get("/catalog/posts", {
      params: {
        ...paramsPost,
      },
    });
}

export const PostApi = new _PostApi();
