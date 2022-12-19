import React from "react";
import LogoImg from "../../assets/ruralog.png";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="#home">
        <img src={LogoImg} alt="Ruralog Logo" />
      </a>
    </div>
  );
};

export default Logo;
