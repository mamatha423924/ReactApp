import React from "react";

import { ArrowDown } from "../../assets/icons/ArrowDown";
import CurrentUser from "../../assets/images/current-user.jpg";

import styles from "./UserProfile.module.css";

export default function UserProfile() {
  return (
    <div className={styles.userProfile}>
      <div className={styles.userInfo}>
        <span className={styles.userName}>Mamatha R</span>
        <span className={styles.userAddress}>Karnataka, India</span>
      </div>
      <img
        src={CurrentUser}
        alt="Mamatha"
        width="38px"
        height="38px"
        className={styles.userImage}
      />
      <ArrowDown />
    </div>
  );
}
