import React from "react";
import cls from "classnames";
import { useField } from "formik";

import styles from "./TextInput.module.scss";

const defaultProps = {
  type: "text-area",
};

const TextInput = (props) => {
  const [field, meta] = useField(props);
  const { type, ...otherProps } = props;
  const hasError = meta.touched && meta.error ? true : false;
  const errorClass = hasError ? "input-error" : "";
  return (
    <div className={styles.inputWrapper}>
      {type === "text-area" ? (
        <textarea
          {...field}
          {...otherProps}
          className={cls("input", errorClass)}
        />
      ) : (
        <input
          type={type}
          {...field}
          {...otherProps}
          className={cls("input", errorClass)}
        />
      )}
      {hasError && (
        <span className={cls("error", styles.error)}>{meta.error}</span>
      )}
    </div>
  );
};

TextInput.defaultProps = defaultProps;
export default TextInput;
