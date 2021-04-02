import { AxiosResponse } from "axios";

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: AxiosResponse<any> ) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return JSON.parse(response.data);
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: AxiosResponse<any>) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw Object.assign({
    error_code: response.status,
    message: response.statusText,
  });;
}
