import styles from "./Pill.module.scss";
import cls from "classnames";

const Pill = (props) => {
  const { children, className, isSelected } = props;
  return (
    <button
      role="button"
      className={
        isSelected
          ? cls(styles.pill, styles.pillActive, className)
          : cls(styles.pill, className)
      }
    >
      {children}
    </button>
  );
};

export default Pill;
