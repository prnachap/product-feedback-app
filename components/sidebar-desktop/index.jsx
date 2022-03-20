import React from "react";

import BoardLogo from "../logo";
import FilterBoard from "../filter-board";
import StatusBoard from "../status-board";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside>
      <div className={styles.sidebar}>
        <BoardLogo />
        <FilterBoard />
        <StatusBoard />
      </div>
    </aside>
  );
};

export default Sidebar;
