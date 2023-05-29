import httpClient from "../axios/http-client";
import URL from "@/config/env";

export default {
  login(params, config) {
    return httpClient.post(URL.apiPrefix + "/v1/auth/login", params, config);
  },
  register(params, config) {
    return httpClient.post(URL.apiPrefix + "/v1/auth/register", params, config);
  },
  checkUser(params, config) {
    return httpClient.get(URL.apiPrefix + "/v1/user/self", params, config);
  }
}