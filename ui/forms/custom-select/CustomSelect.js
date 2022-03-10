import React, { useState } from "react";
import cls from "classnames";
import SelectContext from "../../../context/select-context/SelectContext";
import { useSelectContext } from "../../../hooks/useSelectContext";
import CheckIcon from "../../../public/assets/shared/icon-check.svg";

import styles from "./CustomSelect.module.scss";
import { motion } from "framer-motion";

const defaultProps = {
  variant: "primary",
};

const hovervariant = {
  hover: {
    rotate: "180deg",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};

const CustomSelect = (props) => {
  const { children, variant, className } = props;
  const [state, setState] = useState("most upvotes");
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <SelectContext.Provider value={{ state, open, setState, setOpen }}>
      <div className={styles.selectWrapper}>
        {variant === "primary" && (
          <div className={cls(styles.inputWrapper, styles.activeInput)}>
            <span>{state}</span>
            <span>
              <motion.svg
                whileHover="hover"
                variants={hovervariant}
                width="10"
                height="7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1l4 4 4-4"
                  stroke="#4661E6"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </motion.svg>
            </span>
          </div>
        )}

        {variant === "secondary" && (
          <div
            className={cls(styles.labelWrapper, className)}
            onClick={() => setOpen(true)}
          >
            <span className={styles.label}>Sort by : </span>
            <span className={styles.subLabel}>
              {state}{" "}
              <motion.svg
                className={styles.icon}
                whileHover="hover"
                variants={hovervariant}
                width="10"
                height="7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1l4 4 4-4"
                  stroke="#4661E6"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </motion.svg>
            </span>
          </div>
        )}
        <ul className={styles.dropdown}>{children}</ul>
      </div>
    </SelectContext.Provider>
  );
};

const CustomOption = ({ value, children }) => {
  const { state, setState, open, setOpen } = useSelectContext();
  return (
    open && (
      <li
        value={value}
        onClick={() => {
          setState(value);
          setOpen(false);
        }}
      >
        {children}
        {value === state && <CheckIcon />}
      </li>
    )
  );
};

CustomSelect.CustomOption = CustomOption;
CustomSelect.defaultProps = defaultProps;
SelectContext.displayName = "SelectContext";

export default CustomSelect;
