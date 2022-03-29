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

  return (
    <FeedBackContext.Provider value={{ state, dispatch }}>
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackState;
