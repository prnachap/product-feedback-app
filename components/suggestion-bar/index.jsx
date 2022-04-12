import React from "react";
import { useRouter } from "next/router";

import Button from "../../ui/button/Button";
import Select from "../../ui/forms/select/Select";

import { getOptionsForDropdown } from "../../utils";
import PlusIcon from "../../public/assets/shared/icon-plus.svg";
import SuggestionIcon from "../../public/assets/suggestions/icon-suggestions.svg";
import { typeList } from "../../constants";
import useFeedBackContext from "../../hooks/useFeedBackContext";

import styles from "./Suggestion.module.scss";
import { useAuthContext } from "../../hooks/useAuthContext";

const sortOptions = typeList["sortBy"];

const SuggestionBar = ({ sortBy, setSortBy }) => {
  const router = useRouter();
  const {
    state: { feedback },
  } = useFeedBackContext();

  const {
    state: { currentUser },
  } = useAuthContext();

  const handleMenu = (e) => {
    setSortBy(e.target.value);
  };

  const handleAddFeedback = () => {
    if (!currentUser) return router.push("/login");
    router.push("/create-feedback");
  };

  return (
    <div className={styles.suggestionBar}>
      <SuggestionIcon className={styles.suggestionIcon} />
      <h3
        className={styles.suggestionText}
      >{`${feedback.length} Suggestions`}</h3>

      <Select
        variant="secondary"
        options={getOptionsForDropdown(sortOptions)}
        value={sortBy}
        onChange={handleMenu}
      />
      <Button className={styles.button} onClick={handleAddFeedback}>
        <PlusIcon /> Add Feedback
      </Button>
    </div>
  );
};

export default SuggestionBar;
