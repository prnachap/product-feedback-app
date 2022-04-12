import axios from "axios";

export const getFeedbackById = ({ queryKey }) => {
  const [_, id] = queryKey;
  return axios.get(`http://localhost:5000/api/v1/feedbacks/${id}`);
};
