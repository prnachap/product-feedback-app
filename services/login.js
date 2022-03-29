import axios from "axios";

export const login = (formData) => {
  return axios.post(`http://localhost:5000/api/v1/auth/login`, formData, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });
};
