import React, { useContext } from "react";

import Button from "../../ui/button/Button";
import CustomSelect from "../../ui/forms/custom-select/CustomSelect";
import PlusIcon from "../../public/assets/shared/icon-plus.svg";
import SuggestionIcon from "../../public/assets/suggestions/icon-suggestions.svg";
import { typeList } from "../../constants";

import styles from "./Suggestion.module.scss";
import useFeedBackContext from "../../hooks/useFeedBackContext";

const SuggestionBar = () => {
  const sortOptions = typeList["sortBy"];
  const {
    state: { feedback },
  } = useFeedBackContext();
  return (
    <div className={styles.suggestionBar}>
      <SuggestionIcon className={styles.suggestionIcon} />
      <h3
        className={styles.suggestionText}
      >{`${feedback.length} Suggestions`}</h3>
      <CustomSelect variant="secondary">
        {sortOptions.map((option) => {
          return (
            <CustomSelect.CustomOption key={option} value={option}>
              {option}
            </CustomSelect.CustomOption>
          );
        })}
      </CustomSelect>
      <Button className={styles.button}>
        <PlusIcon /> Add Feedback
      </Button>
    </div>
  );
};

export default SuggestionBar;
