import http from "./httpService";
// import { apiUrl } from "../config.json";
const apiUrl = "https://api.github.com/repos/facebook/react/issues";

export function getBugs() {
  return http.get(`${apiUrl}`);
}
