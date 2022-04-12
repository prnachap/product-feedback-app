import { useQuery, useMutation, useQueryClient } from "react-query";
import { addComment } from "../services/addComment";
import { getFeedbackById } from "../services/getFeedbackById";
import { getSuggestion } from "../services/getSuggestion";
import { updateVotes } from "../services/updateVotes";

function sortBy(field, order) {
  return function (a, b) {
    const fieldOne = field === "comments" ? a[field].length : a[field].length;
    const fieldTwo = field === "comments" ? b[field].length : b[field].length;
    if (fieldOne > fieldTwo) {
      return order === "desc" ? -1 : 1;
    } else if (fieldTwo > fieldOne) {
      return order === "desc" ? 1 : -1;
    }
    return 0;
  };
}

export const useFeedbackData = (id = "all", sorting, otherOptions) => {
  const [sortOrder, sortField] = sorting.split(" ");
  const order = sortOrder === "least" ? "asc" : "desc";
  return useQuery("feedback", getSuggestion, {
    select: (data) => {
      if (id === "all") {
        return data?.data?.data?.sort(sortBy(sortField, order));
      } else {
        return data?.data?.data
          .filter((item) => item.category === id)
          .sort(sortBy(sortField, order));
      }
    },
    ...otherOptions,
  });
};

export const useUpdateVotes = () => {
  const queryClients = useQueryClient();
  return useMutation(updateVotes, {
    onSuccess: () => {
      queryClients.invalidateQueries("feedback");
      // queryClients.setQueryData("feedback", (oldQueriesData) => {
      //   const id = data.data.data._id;
      //   const upvotes = data.data.data.upvotes;
      //   return {
      //     ...oldQueriesData,
      //     data: oldQueriesData?.data?.data?.map((item) => {
      //       if (item._id === id) {
      //
      //         return { ...item, upvotes };
      //       }
      //       return item;
      //     }),
      //   };
      // });
    },
  });
};

export const useAddComments = () => {
  const queryClient = useQueryClient();
  return useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("feedbackById");
    },
  });
};
