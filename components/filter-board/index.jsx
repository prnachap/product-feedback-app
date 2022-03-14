import Pill from "../../ui/pill/Pill";
import { typeList } from "../../constants";

import styles from "./FilterBoard.module.scss";
import useFeedBackContext from "../../hooks/useFeedBackContext";

const FilterBoard = () => {
  const filterOptions = typeList.filterBy;
  const {
    state: { category: activePill },
    setCategory,
  } = useFeedBackContext();

  const handleActivePill = (pillName) => {
    setCategory(pillName);
  };
  return (
    <div className={styles.card}>
      {filterOptions.map((option, index) => {
        const isActive = option === activePill;
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
};

export default FilterBoard;
