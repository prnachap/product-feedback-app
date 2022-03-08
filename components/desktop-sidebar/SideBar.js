import React from "react";
import BoardLogo from "../board-logo/BoardLogo";
import FeatureCard from "../feature-card/FeatureCard";
import RoadMapCard from "../roadmap-card/RoadMapCard";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <BoardLogo />
      <FeatureCard />
      <RoadMapCard />
    </aside>
  );
};

export default SideBar;
