import { useReducer } from "react";
import FeedBackContext from "./FeedBackContext";
import feedbackReducer from "./feedbackReducer";

const FeedBackState = ({ children }) => {
  const initialState = {
    feedback: [],
  };

  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  return (
    <FeedBackContext.Provider value={{ state, dispatch }}>
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackState;
