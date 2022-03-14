import React, { useEffect } from "react";
import { motion } from "framer-motion";

import useFeedBackContext from "../../hooks/useFeedBackContext";
import { useFeedbackData } from "../../hooks/useFeedbackData";
import Suggestion from "./Suggestion";
import SuggestionEmpty from "./SuggestionEmpty";

import styles from "./SuggestionList.module.scss";

const parentCardVariant = {
  initial: {
    y: "1000vh",
    opacity: 0,
  },
  final: {
    y: "0vh",
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const SuggestionList = () => {
  const {
    setData,
    state: { feedback, category },
  } = useFeedBackContext();

  const { isLoading, isError, data } = useFeedbackData(category, {
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (data) {
      setData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, category]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>something went wrong</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="final"
      variants={parentCardVariant}
      className={styles.SuggestionList}
    >
      {feedback.length ? (
        feedback.map((item, index) => {
          return <Suggestion key={item.id} index={index} {...item} />;
        })
      ) : (
        <SuggestionEmpty />
      )}
    </motion.div>
  );
};

export default SuggestionList;
