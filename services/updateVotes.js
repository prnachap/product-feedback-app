import axios from "axios";

export const updateVotes = ({ queryKey }) => {
  const [_, id, votes] = queryKey;
  return axios.patch(
    `http://localhost:4001/productRequests/${id}`,
    { upvotes: votes + 1 },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};
