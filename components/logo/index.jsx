import React, { useContext } from "react";
import { motion } from "framer-motion";

import ToggleSidebarContext from "../../context/toggle-sidebar/ToggleSidebarContext";
import { hamburgerVaraint } from "../animation";

import styles from "./Logo.module.scss";

const Logo = () => {
  const toggleSidebarContext = useContext(ToggleSidebarContext);
  const { openMobileSidebar, handleMobileSidebar } = toggleSidebarContext;

  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>Frontend Mentor</span>
        <span className={styles.subTitle}>Feedback Board</span>
      </div>
      <div className={styles.menuIcon} onClick={handleMobileSidebar}>
        <motion.svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fillRule="evenodd">
            <motion.path
              initial="initial"
              animate={openMobileSidebar ? "final" : "initial"}
              variants={hamburgerVaraint}
              d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"
            />
          </g>
        </motion.svg>
      </div>
    </div>
  );
};

export default Logo;
