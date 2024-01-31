import React from "react";
import styles from "./purple-button.module.css";
export default function PurpleButton({ name }) {
  return (
    <>
      <button className={styles.purpleBtn}>{name}</button>
    </>
  );
}
// import PurpleButton from "./components/purple-button/purple-button";
