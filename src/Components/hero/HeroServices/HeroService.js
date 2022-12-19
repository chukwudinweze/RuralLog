import React from "react";
import styles from "./HeroService.module.css";

const HeroService = ({ icon, label }) => {
  return (
    <li className={styles.HeroService}>
      <div>
        <img src={icon} alt="" />
      </div>
      <p>{label}</p>
    </li>
  );
};

export default HeroService;
