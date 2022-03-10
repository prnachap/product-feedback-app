import Pill from "../../ui/pill/Pill";
import { typeList } from "../../constants";

import styles from "./FilterBoard.module.scss";

const FilterBoard = () => {
  const filterOptions = typeList.filterBy;
  return (
    <div className={styles.card}>
      {filterOptions.map((option, index) => {
        return <Pill key={`${option}-${index}`}>{option}</Pill>;
      })}
    </div>
  );
};

export default FilterBoard;
