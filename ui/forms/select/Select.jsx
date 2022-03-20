import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cls from "classnames";

import CheckIcon from "../../../public/assets/shared/icon-check.svg";
import { iconHovervariant, menuVariants } from "../../../animation";

import styles from "./Select.module.scss";

const defaultProps = {
  variant: "primary",
};

const Select = (props) => {
  const {
    options,
    className,
    variant,
    name,
    error,
    value: inputValue,
    onChange,
    ...otherProps
  } = props;

  const [openMenu, setOpenMenu] = useState(false);

  const handleInput = (e) => {
    onChange(e);
  };

  const handleFocus = (e) => {
    setOpenMenu(true);
  };

  const handleMenu = (value) => () => {
    onChange({
      target: {
        name,
        value: value,
      },
    });
    setOpenMenu(false);
  };

  const handleClick = () => {
    setOpenMenu(true);
  };

  const dropdownRef = useRef();
  useEffect(() => {
    const eventHandler = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef?.current?.contains(e.target)
      ) {
        setOpenMenu(false);
      }
    };
    addEventListener("mousedown", eventHandler);
    return () => removeEventListener("mousedown", eventHandler);
  }, []);
  const errorClass = error ? "input-error" : "";
  return (
    <div className={styles.formContainer}>
      {variant === "primary" && (
        <div className={styles.formGroup}>
          <input
            className={cls("input", className, errorClass)}
            onChange={(e) => handleInput(e)}
            name={name}
            value={inputValue}
            onFocus={handleFocus}
            {...otherProps}
            autoComplete="off"
          />
          <motion.svg
            initial="initial"
            animate={openMenu ? "hover" : "initial"}
            variants={iconHovervariant}
            width="10"
            height="7"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          >
            <path
              d="M1 1l4 4 4-4"
              stroke="#4661E6"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </motion.svg>
          {error && <span className={cls("error", styles.error)}>{error}</span>}
        </div>
      )}

      {variant === "secondary" && (
        <div className={styles.labelWrapper} onClick={handleClick}>
          <span className={styles.label}>Sort by : </span>
          <span className={styles.subLabel}>
            <span>{inputValue}</span>
            <motion.svg
              className={styles.icon}
              initial="initial"
              animate={openMenu ? "hover" : "initial"}
              variants={iconHovervariant}
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

      <AnimatePresence exitBeforeEnter>
        {openMenu && (
          <motion.ul
            className={styles.menu}
            ref={dropdownRef}
            initial="initial"
            animate={openMenu ? "final" : ""}
            exit="exit"
            variants={menuVariants}
          >
            {options.map(({ value, label }, index) => (
              <li key={`${label}-${index}`} onClick={handleMenu(value)}>
                {value}
                {value === inputValue && <CheckIcon />}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

Select.defaultProps = defaultProps;

export default Select;
