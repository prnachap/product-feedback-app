import Pill from "../../ui/pill/Pill";
import { typeList } from "../../constants";

import styles from "./FilterBoard.module.scss";
import useFeedBackContext from "../../hooks/useFeedBackContext";
import { setCategory } from "../../context/feedback/feedbackAction";

const FilterBoard = () => {
  const filterOptions = typeList.filterBy;
  const {
    state: { category: activePill },
    dispatch,
  } = useFeedBackContext();

  const handleActivePill = (pillName) => {
    setCategory(dispatch, pillName.toLowerCase());
  };
  return (
    <div className={styles.card}>
      {filterOptions.map((option, index) => {
        const isActive = option.toLowerCase() === activePill.toLowerCase();
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
