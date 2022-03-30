import React, { useContext } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import FilterBoard from "../filter-board";
import StatusBoard from "../status-board";

import { overlayVariants, sidebarVariants } from "../../animation";
import ToggleSidebarContext from "../../context/toggle-sidebar/ToggleSidebarContext";

import styles from "./SidebarMobile.module.scss";
import Button from "../../ui/button/Button";
import { useAuthContext } from "../../hooks/useAuthContext";
import { removeCurrentUser } from "../../context/authContext/authActions";

const SidebarMobile = (props) => {
  const toggleSidebarContext = useContext(ToggleSidebarContext);
  const {
    state: { currentUser },
    dispatch,
  } = useAuthContext();
  const { openMobileSidebar } = toggleSidebarContext;
  const { push } = useRouter();

  const handleLogin = () => {
    if (!currentUser) {
      push("/login");
    } else {
      removeCurrentUser(dispatch);
      localStorage.removeItem("token");
      push("/login");
    }
  };
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
            <Button onClick={handleLogin}>
              {currentUser ? "Logout" : "Login"}
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidebarMobile;
