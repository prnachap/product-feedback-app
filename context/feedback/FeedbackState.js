import { useReducer } from "react";
import { actionTypes } from "../type";
import FeedbackContext from "./FeedBackContext";
import feedbackReducer from "./feedbackReducer";

const FeedbackState = ({ children }) => {
  const initialState = {
    feedback: [],
  };

  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  //   setFeedbackData
  const setData = (data) =>
    dispatch({ type: actionTypes.SET_FEEDBACK_DATA, payload: data });

  return (
    <FeedbackContext.Provider value={{ state, setData }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackState;
