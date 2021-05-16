import { FindPostBody } from "types/model/Post";
import instance from "../v1";

class _PostyApiUser {
  getList = (body: FindPostBody) =>
    instance.post("/catalog/posts/find", {
      total_result: body.total_result,
      page: body.page,
      category_id: body.category_id,
      type: body.type,
      sort_by: body.sort_by,
      condition: body.condition,
    });
}

export const PostApiUser = new _PostyApiUser();
