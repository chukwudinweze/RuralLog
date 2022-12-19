import React from "react";
import styles from "./BlackHeader.module.css";

const BlackHeader = ({ label }) => {
  return <h2 className={styles.BlackHeader}>{label}</h2>;
};

export default BlackHeader;
