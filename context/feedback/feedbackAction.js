import { actionTypes } from "../type";

//   setFeedbackData
export const setData = (dispatch, data) =>
  dispatch({ type: actionTypes.SET_FEEDBACK_DATA, payload: data });

// filterbycategory
export const setCategory = (dispatch, category) => {
  dispatch({ type: actionTypes.SET_CATEGORY, payload: category });
};

// update votes
export const updateVote = (dispatch, id) => {
  dispatch({ type: actionTypes.UPDATE_VOTE, payload: id });
};

export const sortFeedback = (dispatch, sortBy) => {
  dispatch({ type: actionTypes.SORT_FEEDBACK, payload: sortBy });
};
