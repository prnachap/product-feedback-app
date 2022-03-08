import React from "react";
import cls from "classnames";
import styles from "./Button.module.scss";

const defaultProps = {
  as: null,
  href: null,
  variant: "primary",
};

const Button = (props) => {
  const { children, className, href, as, variant, ...restProps } = props;

  let Component = as;

  if (as === null) {
    if (href) {
      Component = "a";
      restProps.href = href;
    } else {
      Component = "button";
      restProps.type ??= "button";
    }
  }

  return (
    <Component
      className={cls(styles.button, styles[variant], className)}
      {...restProps}
    >
      {props.children}
    </Component>
  );
};

Button.defaultProps = defaultProps;
export default Button;
