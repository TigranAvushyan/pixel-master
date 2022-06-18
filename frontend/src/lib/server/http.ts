import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/"
});

http.interceptors.response.use((response) => response, (error => {
  if (error.response.status === 401) {
    window.location.href = "/login";
  }
  return Promise.reject(error)
}));

export default http;
