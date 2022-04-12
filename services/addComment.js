import axios from "axios";
import { getTokenFromLocalStorage } from "../utils";

export const addComment = (data) => {
  const { id, content } = data;

  return axios.post(
    `http://localhost:5000/api/v1/feedbacks/${id}/comments`,
    { content: content.comment },
    {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    }
  );
};
