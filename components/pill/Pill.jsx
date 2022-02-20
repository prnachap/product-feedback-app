import styles from "./Pill.module.scss";
import cls from "classnames";

const Pill = ({ children, isSelected }) => {
  return (
    <button
      className={isSelected ? cls(styles.pill, styles.pillActive) : styles.pill}
    >
      {children}
    </button>
  );
};

export default Pill;
