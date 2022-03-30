import axios from "axios";

export const signUp = (formData) => {
  return axios.post(`http://localhost:5000/api/v1/auth/register`, formData, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });
};
