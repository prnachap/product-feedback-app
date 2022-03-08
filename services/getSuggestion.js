import axios from "axios";

export const getSuggestion = () => {
  return axios.get("http://localhost:4001/productRequests");
};
