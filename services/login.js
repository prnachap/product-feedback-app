import axios from "axios";

export const login = ({ queryKey }) => {
  const [_, body] = queryKey;
  return axios.post(`http://localhost:5000/api/v1/auth/login`, body, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });
};
