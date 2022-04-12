import axios from "axios";
import { getTokenFromLocalStorage } from "../utils";

export const updateVotes = (id) => {
  return axios.put(
    `http://localhost:5000/api/v1/feedbacks/likes/${id}`,
    {},
    {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    }
  );
};
