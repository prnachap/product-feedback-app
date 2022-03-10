import React from "react";
import cls from "classnames";
import styles from "./DropdownMenu.module.scss";
import ArrowDownIcon from "../../public/assets/suggestions/icon-suggestions.svg";

const DropdownMenu = (props) => {
  const { className, children } = props;
  return <ul className={cls(styles.dropdownMenu, className)}>{children}</ul>;
};

export default DropdownMenu;
