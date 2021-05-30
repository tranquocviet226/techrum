import instance from "../v1";

class _GetUserApi {
  getUser = () => instance.get("/user");
}

export const GetUserApi = new _GetUserApi();
