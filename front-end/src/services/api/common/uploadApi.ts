import axios from "axios";
import { APP_URL } from "constants/index";

class _UploadApi {
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
}

export const UploadApi = new _UploadApi();
