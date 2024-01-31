import React from "react";
import styles from "./button.module.css";
export default function Button({ name }) {
  return (
    <>
      <button className={styles.btn}>{name}</button>
    </>
  );
}
// import Button from "./components/button/button";
