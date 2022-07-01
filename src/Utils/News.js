import { request } from "./Api";

export const getNews = (query) => {
  return request("https://newsapi.org/v2/everything?q=" + query, "get");
};

export const saveNews = (data) => {
  return request("http://localhost:3001/articles", "post", data);
};
