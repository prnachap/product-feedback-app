import React from "react";
import cls from "classnames";

import styles from "./TextInput.module.scss";

const defaultProps = {
  type: "text-area",
};

const TextInput = (props) => {
  const { type, error, className, ...otherProps } = props;
  const errorClass = error ? "input-error" : "";
  return (
    <div className={styles.inputWrapper}>
      {type === "text-area" ? (
        <textarea {...otherProps} className={cls("input", errorClass)} />
      ) : (
        <input
          type={type}
          {...otherProps}
          className={cls("input", errorClass)}
        />
      )}
      {error && <span className={cls("error", styles.error)}>{error}</span>}
    </div>
  );
};

TextInput.defaultProps = defaultProps;
export default TextInput;
