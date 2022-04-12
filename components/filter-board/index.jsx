import React, { memo } from "react";
import Pill from "../../ui/pill/Pill";
import { typeList } from "../../constants";

import styles from "./FilterBoard.module.scss";

function FilterBoard({ category, setCategory }) {
  const filterOptions = typeList.filterBy;

  const handleActivePill = (pillName) => {
    setCategory(pillName.toLowerCase());
  };
  return (
    <div className={styles.card}>
      {filterOptions.map((option, index) => {
        const isActive = option.toLowerCase() === category.toLowerCase();
        return (
          <Pill
            key={`${option}-${index}`}
            isActive={isActive}
            upperCaseText={option.length <= 2}
            onClick={() => handleActivePill(option)}
          >
            {option}
          </Pill>
        );
      })}
    </div>
  );
}

FilterBoard = memo(FilterBoard);

export default FilterBoard;
