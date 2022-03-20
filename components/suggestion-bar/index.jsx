import React, { useState } from "react";
import { useRouter } from "next/router";

import Button from "../../ui/button/Button";
import Select from "../../ui/forms/select/Select";

import { getOptionsForDropdown } from "../../utils";
import PlusIcon from "../../public/assets/shared/icon-plus.svg";
import SuggestionIcon from "../../public/assets/suggestions/icon-suggestions.svg";
import { typeList } from "../../constants";
import useFeedBackContext from "../../hooks/useFeedBackContext";

import styles from "./Suggestion.module.scss";

const sortOptions = typeList["sortBy"];

const SuggestionBar = () => {
  const [dropDownMenu, setDropDownMenu] = useState("most upvotes");
  const router = useRouter();
  const {
    state: { feedback },
  } = useFeedBackContext();

  const handleMenu = (e) => {
    setDropDownMenu(e.target.value);
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
        value={dropDownMenu}
        onChange={handleMenu}
      />
      <Button
        className={styles.button}
        onClick={() => router.push("/create-feedback")}
      >
        <PlusIcon /> Add Feedback
      </Button>
    </div>
  );
};

export default SuggestionBar;
