import React from "react";
import styles from "./grey-button.module.css";
export default function GreyButton({ name }) {
  return (
    <>
      <button className={styles.greyBtn}>{name}</button>
    </>
  );
}
// import GreyButton from "./components/grey-button/grey-button";
