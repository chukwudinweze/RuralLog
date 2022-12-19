import React from "react";
import logo from "../../assets/ruralog.png";
import styles from "./FooterLogo.module.css";

const FooterLogo = () => {
  return (
    <article className={styles.FooterLogo}>
      <div className={styles.logoImg}>
        <img src={logo} alt="rural log" />
      </div>
      <p>
        Welcome to our Agriculture Farming. Lorem simply text amet cing elit.
      </p>
    </article>
  );
};

export default FooterLogo;
