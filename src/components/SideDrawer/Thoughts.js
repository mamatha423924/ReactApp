import React from "react";

import { LampOn } from "../../assets/icons/LampOn";

import styles from "./Thoughts.module.css";

export default function Thoughts() {
  return (
    <div className={styles.thoughts}>
      <div className={styles.lamp}>
        <span className={styles.innerEllipse}></span>
        <LampOn />
      </div>
      <section className={styles.thoughtsText}>
        <h2 className={styles.title}>Thoughts</h2>
        <p className={styles.description}>
          you can share your thoughts with us.
        </p>
        <button className={styles.textButton}>Drop a message</button>
      </section>
    </div>
  );
}
