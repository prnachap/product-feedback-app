import { actionTypes } from "../type";

/* eslint-disable import/no-anonymous-default-export */

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_FEEDBACK_DATA:
      return { ...state, feedback: payload };
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
        // feedback: [
        //   ...state.feedback.slice(0, payload),
        //   {
        //     ...state.feedback[payload],
        //     upvotes: state.feedback[payload].upvotes + 1,
        //   },
        //   ...state.feedback.slice(payload),
        // ],
      };
    default:
      return state;
  }
};
