import React from "react";
import cls from "classnames";

import Loader from "../loader/Loader";
import styles from "./Button.module.scss";

const defaultProps = {
  as: null,
  href: null,
  variant: "primary",
};

const Button = (props) => {
  const { children, className, href, as, variant, isLoading, ...restProps } =
    props;

  let Component = as;

  if (as === null) {
    if (href) {
      Component = "a";
      restProps.href = href;
    } else {
      Component = "button";
      restProps.type ??= "button";
      restProps.disabled = isLoading ? true : false;
    }
  }
  const loaderStyles = isLoading ? styles.flexDisplay : styles.inlineDisplay;
  return (
    <Component
      className={cls(styles.button, styles[variant], className)}
      {...restProps}
    >
      <span>{props.children}</span>
      <Loader isLoading={isLoading} />
    </Component>
  );
};

Button.defaultProps = defaultProps;
export default Button;
