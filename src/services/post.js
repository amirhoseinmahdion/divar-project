import { api } from "../configs/axios";
const GetMyPosts = () => api.get("post/my");
const GetPostId = (id) => api.get(`post/${id}`);
const GetPostbycat = (slug) => api.get(`option/by-category-slug/${slug}`);
const AllPosts = () => api.get("");
export { GetMyPosts, AllPosts, GetPostId, GetPostbycat };
