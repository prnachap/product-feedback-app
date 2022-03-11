import Pill from "../../ui/pill/Pill";
import { typeList } from "../../constants";

import styles from "./FilterBoard.module.scss";
import { useContext, useEffect, useState } from "react";
import FeedbackContext from "../../context/feedback/FeedBackContext";
import { useFeedbackData } from "../../hooks/useFeedbackData";

const FilterBoard = () => {
  const filterOptions = typeList.filterBy;
  const [activePill, setActivePill] = useState("all");
  const { setData } = useContext(FeedbackContext);

  const { data } = useFeedbackData(activePill);

  useEffect(() => {
    if (data) {
      setData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePill, data]);

  const handleActivePill = (pillName) => {
    setActivePill(pillName);
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
          >
            <span onClick={() => handleActivePill(option)}>{option}</span>
          </Pill>
        );
      })}
    </div>
  );
};

export default FilterBoard;
