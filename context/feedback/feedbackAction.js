import { actionTypes } from "../type";

//   setFeedbackData
export const setData = (dispatch, data) => {
  dispatch({ type: actionTypes.SET_FEEDBACK_DATA, payload: data });
};
