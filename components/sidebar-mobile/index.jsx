import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FilterBoard from "../filter-board";
import StatusBoard from "../status-board";

import { overlayVariants, sidebarVariants } from "../../animation";
import ToggleSidebarContext from "../../context/toggle-sidebar/ToggleSidebarContext";

import styles from "./SidebarMobile.module.scss";

const SidebarMobile = (props) => {
  const toggleSidebarContext = useContext(ToggleSidebarContext);
  const { openMobileSidebar } = toggleSidebarContext;
  return (
    <AnimatePresence exitBeforeEnter>
      {openMobileSidebar && (
        <>
          <motion.div
            className={styles.overlay}
            initial="initial"
            animate="final"
            exit="exit"
            variants={overlayVariants}
          />
          <motion.div
            className={styles.mobileSideBar}
            {...props}
            initial="initial"
            animate="final"
            exit="exit"
            variants={sidebarVariants}
          >
            <FilterBoard />
            <StatusBoard />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidebarMobile;
