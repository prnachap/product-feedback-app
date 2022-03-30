import React, { useState } from "react";
import cls from "classnames";
import { motion, AnimatePresence } from "framer-motion";

import CloseIcon from "../../public/assets/shared/icons8-close-15.svg";
import styles from "./Alert.module.scss";

const alertVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const defaultProps = {
  variant: "success",
  withIcon: false,
};

const Alert = (props) => {
  const [state, setState] = useState(true);
  const { className, children, variant, withIcon, ...otherProps } = props;
  const handleShowAlert = () => {
    setState(!state);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {state && (
        <motion.div
          className={cls(styles.alert, styles[variant], className)}
          {...otherProps}
          role="alert"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={alertVariants}
        >
          <div>{children}</div>
          {withIcon && (
            <CloseIcon className={styles.icon} onClick={handleShowAlert} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
Alert.defaultProps = defaultProps;
export default Alert;
