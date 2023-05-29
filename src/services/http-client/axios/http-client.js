import http from "./axios.js";
import URL from "@/config/env";

export default {
  get(url, params = {}, config = { showLoading: true }, responseType = "json") {
    const token = localStorage.getItem('access_token')
    const headers = {Authorization : `Bearer ${token}`}
    return new Promise((resolve, reject) => {
      http({
        method: "get",
        url: url.includes("://") ? url : URL.apiPrefix,
        params,
        responseType,
        config,
        headers
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  post(url, data = {}, config = { showLoading: true }, responseType = "json") {
    return new Promise((resolve, reject) => {
      http({
        method: "post",
        url: url.includes("://") ? url : URL.apiPrefix,
        data,
        responseType,
        config,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
