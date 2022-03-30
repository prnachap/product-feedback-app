import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { hamburgerVaraint } from "../../animation";
import ToggleSidebarContext from "../../context/toggle-sidebar/ToggleSidebarContext";
import LogoutIcon from "../../public/assets/shared/logout.svg";
import LoginIcon from "../../public/assets/shared/login.svg";

import styles from "./Logo.module.scss";
import { useAuthContext } from "../../hooks/useAuthContext";
import { removeCurrentUser } from "../../context/authContext/authActions.js";

const Logo = () => {
  const toggleSidebarContext = useContext(ToggleSidebarContext);
  const {
    state: { currentUser },
    dispatch,
  } = useAuthContext();
  const { push } = useRouter();
  const { openMobileSidebar, handleMobileSidebar } = toggleSidebarContext;

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
    <div className={styles.container}>
      <div className={styles.logoutIconWrapper} onClick={handleLogin}>
        {currentUser ? (
          <LogoutIcon className={styles.logoutIcon} />
        ) : (
          <LoginIcon className={styles.logoutIcon} />
        )}
        <span>{currentUser ? "logout" : "login"}</span>
      </div>
      <div className={styles.titleWrapper}>
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
