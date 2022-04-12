import React, { memo } from "react";

import BoardLogo from "../logo";
import FilterBoard from "../filter-board";
import StatusBoard from "../status-board";

import styles from "./Sidebar.module.scss";

function Sidebar({ category, setCategory }) {
  return (
    <aside>
      <div className={styles.sidebar}>
        <BoardLogo />
        <FilterBoard category={category} setCategory={setCategory} />
        <StatusBoard />
      </div>
    </aside>
  );
}

Sidebar = memo(Sidebar);
export default Sidebar;
