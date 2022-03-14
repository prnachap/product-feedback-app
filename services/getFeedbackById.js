import axios from "axios";

export const getFeedbackById = ({ queryKey }) => {
  const [_, id] = queryKey;
  return axios.get(`http://localhost:4001/productRequests/${id}`);
};
