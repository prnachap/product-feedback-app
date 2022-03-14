import { useContext } from "react";
import FeedBackContext from "../context/feedback/FeedBackContext";

const useFeedBackContext = () => {
  const context = useContext(FeedBackContext);
  if (!context) {
    throw new Error(`useFeedbackContext to be used within <App/> component`);
  }
  return context;
};

export default useFeedBackContext;
