import React from "react";
import styles from "./Suggestion.module.scss";
import ArrowUpIcon from "../../public/assets/shared/icon-arrow-up.svg";
import ArrowDownIcon from "../../public/assets/shared/icon-arrow-down.svg";
import PlusIcon from "../../public/assets/shared/icon-plus.svg";
import SuggestionIcon from "../../public/assets/suggestions/icon-suggestions.svg";
import Button from "../../ui/button/Button";

const SuggestionBar = () => {
  return (
    <div className={styles.suggestionBar}>
      <SuggestionIcon className={styles.suggestionIcon} />
      <h3 className={styles.suggestionText}>6 Suggestions</h3>
      <div>
        <span className={styles.label}>Sort by : </span>
        <span className={styles.dropdown}>
          Most Upvotes <ArrowDownIcon className={styles.icon} />
        </span>
      </div>
      <Button className={styles.button}>
        <PlusIcon /> Add Feedback
      </Button>
    </div>
  );
};

export default SuggestionBar;
