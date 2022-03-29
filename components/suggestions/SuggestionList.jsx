import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Suggestion from "./Suggestion";
import SuggestionEmpty from "./SuggestionEmpty";
import Loader from "../../ui/loader/Loader";

import useFeedBackContext from "../../hooks/useFeedBackContext";
import { useFeedbackData } from "../../hooks/useFeedbackData";
import { setData } from "../../context/feedback/feedbackAction";

import styles from "./SuggestionList.module.scss";

const parentCardVariant = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const SuggestionList = () => {
  const {
    state: { feedback, category },
    dispatch,
  } = useFeedBackContext();

  const { isLoading, isError, data } = useFeedbackData(category, {
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (data) {
      setData(dispatch, data);
    }
  }, [data, category, dispatch]);

  if (isLoading) {
    return (
      <div className={styles.spinnerWrapper}>
        <Loader isLoading={isLoading} variant="secondary" />
      </div>
    );
  }

  if (isError) {
    return <div>something went wrong</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
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
