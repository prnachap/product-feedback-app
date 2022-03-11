import { useQuery } from "react-query";
import { getSuggestion } from "../services/getSuggestion";

export const useFeedbackData = (id = "all", otherOptions) => {
  return useQuery("feedback", getSuggestion, {
    select: (data) => {
      if (id === "all") {
        return data.data;
      } else {
        return data.data.filter((item) => item.category === id);
      }
    },
    ...otherOptions,
  });
};
