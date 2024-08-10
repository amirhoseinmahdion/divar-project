import { api } from "../configs/axios";

const getUser = () => api.get("user/whoami");
export { getUser };
