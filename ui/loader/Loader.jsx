import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import cls from "classnames";

import styles from "./Loader.module.scss";

const loaderVariants = {
  hidden: {
    opacity: 0,
  },
  animationOne: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const childrenVariants = {
  animationOne: {
    y: [0, 10],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const defaultProps = {
  varaint: "primary",
};

const Loader = (props) => {
  const { isLoading, className, variant = "primary" } = props;
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={loaderVariants}
          animate={isLoading ? "animationOne" : "hidden"}
          className={styles.loaderContainer}
        >
          <motion.div
            className={cls(styles.loader, styles[variant])}
            variants={childrenVariants}
          ></motion.div>
          <motion.div
            className={cls(styles.loader, styles[variant])}
            variants={childrenVariants}
          ></motion.div>
          <motion.div
            className={cls(styles.loader, styles[variant])}
            variants={childrenVariants}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
Loader.defaultProps = defaultProps;
export default Loader;
