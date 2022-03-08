import React from "react";
import { motion } from "framer-motion";

import FeatureCard from "../feature-card/FeatureCard";
import RoadMapCard from "../roadmap-card/RoadMapCard";

import styles from "./Mobile.module.scss";

const sideVariants = {
  initial: {
    width: "0",
    transition: {
      duration: 2,
    },
  },
  final: {
    width: "80%",
    duration: 2,
  },
};

const MobileSideBar = (props) => {
  return (
    <motion.div
      className={styles.mobileSideBar}
      {...props}
      initial="initial"
      animate="final"
      variants={sideVariants}
    >
      <FeatureCard />
      <RoadMapCard />
    </motion.div>
  );
};

export default MobileSideBar;
