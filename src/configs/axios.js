import axios from "axios";
import { GetCookie, SetCookie } from "../utils/cookie";
import { checkrefreshtoken } from "../services/auth";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type ": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = GetCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originrequest = error.config;
    if (error.response.status === 401 && !originrequest._retry) {
      originrequest._retry = true;
      const res = await checkrefreshtoken();
      if (!res?.data) return;
      SetCookie(res.data);
      return api(originrequest);
    }
  }
);
