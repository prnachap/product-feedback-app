import { useReducer } from "react";
import { actionTypes } from "../type";
import FeedBackContext from "./FeedBackContext";
import feedbackReducer from "./feedbackReducer";

const FeedBackState = ({ children }) => {
  const initialState = {
    feedback: [],
    category: "all",
  };

  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  //   setFeedbackData
  const setData = (data) =>
    dispatch({ type: actionTypes.SET_FEEDBACK_DATA, payload: data });

  // filterbycategory
  const setCategory = (category) => {
    dispatch({ type: actionTypes.SET_CATEGORY, payload: category });
  };

  // update votes
  const updateVote = (id) => {
    dispatch({ type: actionTypes.UPDATE_VOTE, payload: id });
  };

  return (
    <FeedBackContext.Provider
      value={{ state, setData, setCategory, updateVote }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackState;
