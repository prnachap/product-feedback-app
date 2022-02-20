import React, { useState } from "react";
import styles from "./BoardLogo.module.scss";
import HamburgerIcon from "../../public/assets/shared/mobile/icon-hamburger.svg";
import CloseIcon from "../../public/assets/shared/mobile/icon-close.svg";

const BoardLogo = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>Frontend Mentor</span>
        <span className={styles.subTitle}>Feedback Board</span>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </div>
    </div>
  );
};

export default BoardLogo;
