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
    default:
      return state;
  }
};
