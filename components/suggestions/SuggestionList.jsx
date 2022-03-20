import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Suggestion from "./Suggestion";
import SuggestionEmpty from "./SuggestionEmpty";

import useFeedBackContext from "../../hooks/useFeedBackContext";
import { useFeedbackData } from "../../hooks/useFeedbackData";

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
// {feedback.length ? (
//   feedback.map((item, index) => {
//     return <Suggestion key={item.id} index={index} {...item} />;
//   })
// ) : (
//   <SuggestionEmpty />
// )}
