import { api } from "../configs/axios";
import { GetCookie } from "../utils/cookie";

const postMobile = async (mobile) => {
  try {
    const response = await api.post("auth/send-otp", { mobile });
    return response;
  } catch (error) {
    return error;
  }
};
const checkCode = async (mobile, code) => {
  try {
    const response = await api.post("auth/check-otp", { mobile, code });
    return response;
  } catch (error) {
    return error;
  }
};
const checkrefreshtoken = async () => {
  const refreshToken = GetCookie("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await api.post("auth/check-refresh-token", {
      refreshToken,
    });
    return response;
  } catch (error) {
    return error;
  }
};
export { postMobile, checkCode, checkrefreshtoken };
