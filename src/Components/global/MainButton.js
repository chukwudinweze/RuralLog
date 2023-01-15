import React from "react";
import styles from "./MainButton.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const MainButton = ({ link, label }) => {
  return (
    <button className={styles.button}>
      <Link to={link}>
        {label}
        <p>
          <HiArrowLongRight />
        </p>
      </Link>
    </button>
  );
};

export default MainButton;
