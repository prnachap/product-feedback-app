import styles from "./Pill.module.scss";
import cls from "classnames";

const defaultProps = {
  upperCaseText: false,
};

const Pill = (props) => {
  const { children, className, isActive, upperCaseText, ...otherProps } = props;

  return (
    <button
      role="button"
      className={cls(
        styles.pill,
        {
          [styles.pillActive]: isActive,
          [styles.pillUpper]: upperCaseText,
        },
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Pill.defaultProps = defaultProps;
export default Pill;
