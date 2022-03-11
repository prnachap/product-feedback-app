import { actionTypes } from "../type";

/* eslint-disable import/no-anonymous-default-export */

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_FEEDBACK_DATA:
      return { ...state, feedback: payload };
    default:
      return state;
  }
};
