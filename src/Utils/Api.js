import axios from "axios";
import { CONSTANTS } from "../config";

export const request = (url, method = "get", data) => {
  const config = {
    method,
    url,
    headers: {
      "X-Api-Key": CONSTANTS.apiKey,
    },
  };
  if (data) {
    config["data"] = data;
  }
  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
