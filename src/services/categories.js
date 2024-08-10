import { api } from "../configs/axios";
const SendCategories = (categoris) => api.post("category", categoris);
const GetCategory = () => api.get("category");
const DeleteCategory = (id) => api.delete(`category/${id}`);
export { SendCategories, GetCategory, DeleteCategory };
