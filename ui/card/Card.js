import React from "react";
import cls from "classnames";
import { motion } from "framer-motion";

import styles from "./Card.module.scss";

const Card = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <motion.div className={cls(styles.card, className)} {...restProps}>
      {children}
    </motion.div>
  );
};

export default Card;
