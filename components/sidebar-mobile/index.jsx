import React from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../../ui/button/Button";
import FilterBoard from "../filter-board";
import StatusBoard from "../status-board";

import { overlayVariants, sidebarVariants } from "../../animation";

import { useAuthContext } from "../../hooks/useAuthContext";
import { removeCurrentUser } from "../../context/authContext/authActions";
import { useToggleState } from "../../hooks/useToggleState";

import styles from "./SidebarMobile.module.scss";

const SidebarMobile = (props) => {
  const {
    state: { currentUser },
    dispatch,
  } = useAuthContext();
  const [open] = useToggleState();
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
      {open && (
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
            <FilterBoard category={category} setCategory={setCategory} />
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
