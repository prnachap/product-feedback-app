import React from "react";
import { useQuery } from "react-query";
import { getSuggestion } from "../../services/getSuggestion";
import Suggestion from "./Suggestion";
import styles from "./SuggestionList.module.scss";

const SuggestionList = () => {
  const { isLoading, isError, data, select } = useQuery(
    "suggestions",
    getSuggestion
  );

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className={styles.SuggestionList}>
      {data.data.map((item) => {
        return <Suggestion key={item.id} {...item} />;
      })}
    </div>
  );
};

export default SuggestionList;
