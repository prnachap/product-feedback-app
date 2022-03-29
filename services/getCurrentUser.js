import axios from "axios";
import { getTokenFromLocalStorage } from "../utils";

export const getCurrentUser = () => {
  return axios.get("http://localhost:5000/api/v1/auth/me", {
    withCredentials: true,
    headers: {
      authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
};
