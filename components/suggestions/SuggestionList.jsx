import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";

import FeedbackContext from "../../context/feedback/FeedBackContext";
import { useFeedbackData } from "../../hooks/useFeedbackData";
import { getSuggestion } from "../../services/getSuggestion";
import Suggestion from "./Suggestion";

import styles from "./SuggestionList.module.scss";

const SuggestionList = () => {
  const {
    setData,
    state: { feedback },
  } = useContext(FeedbackContext);

  const { isLoading, isError, data } = useFeedbackData();

  useEffect(() => {
    if (data) {
      setData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>something went wrong</div>;
  }

  return (
    <div className={styles.SuggestionList}>
      {feedback.map((item) => {
        return <Suggestion key={item.id} {...item} />;
      })}
    </div>
  );
};

export default SuggestionList;
