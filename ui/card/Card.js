import React from "react";
import cls from "classnames";

import styles from "./Card.module.scss";

const Card = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <div className={cls(styles.card, className)} {...restProps}>
      {children}
    </div>
  );
};

export default Card;
