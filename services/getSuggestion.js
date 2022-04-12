import axios from "axios";

export const getSuggestion = () => {
  return axios.get("http://localhost:5000/api/v1/feedbacks");
};
