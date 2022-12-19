import React from "react";
import styles from "./GreenHeader.module.css";

const GreenHeader = ({ label }) => {
  return <h3 className={styles.GreenHeader}>{label}</h3>;
};

export default GreenHeader;
