import axios from "axios";

export const addComment = ({ queryKey }) => {
  const [_, id, comments] = queryKey;
  const { previousComments, newComment } = comments;
  const addedComment = {
    id: previousComments.length + 1,
    content: newComment,
    user: {
      image: "./assets/user-images/image-victoria.jpg",
      name: "Victoria Mejia",
      username: "arlen_the_marlin",
    },
  };
  return axios.patch(
    `http://localhost:4001/productRequests/${id}`,
    {
      comments: [...previousComments, addedComment],
    },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};
