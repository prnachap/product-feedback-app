import { actionTypes } from "../type";

/* eslint-disable import/no-anonymous-default-export */

function sortFeedbackData(data, sortBy) {
  if (sortBy === "most upvotes") {
    data.sort((a, b) => a.upvotes - b.upvotes);
  } else if (sortBy === "least upvotes") {
    data.sort((a, b) => b.upvotes - a.upvotes);
  }
}

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_FEEDBACK_DATA:
      return { ...state, feedback: payload, filteredData: payload };
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case actionTypes.UPDATE_VOTE:
      return {
        ...state,
        feedback: state.feedback.map((item) => {
          if (item.id === payload) {
            return { ...item, upvotes: item.upvotes + 1 };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};
