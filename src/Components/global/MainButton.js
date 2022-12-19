import React from "react";
import styles from "./MainButton.module.css";
import { HiArrowLongRight } from "react-icons/hi2";

const MainButton = ({ link, label }) => {
  return (
    <button className={styles.button}>
      <a href={link}>
        {label}
        <p>
          <HiArrowLongRight />
        </p>
      </a>
    </button>
  );
};

export default MainButton;
