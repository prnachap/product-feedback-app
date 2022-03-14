import React from "react";
import styles from "./TextInput.module.scss";
import cls from "classnames";

const TextInput = (props) => {
  const { error, className, ...otherProps } = props;
  const errorClass = error ? "input-error" : "";
  console.log(error, errorClass);
  return (
    <div className={styles.inputWrapper}>
      <textarea {...otherProps} className={cls("input", errorClass)} />
      {error && <span className={cls("error", styles.error)}>{error}</span>}
    </div>
  );
};

export default TextInput;
