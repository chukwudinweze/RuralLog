import React from "react";
import Contact from "./Contact";
import Explore from "./Explore";
import FooterLogo from "./FooterLogo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.Footer}>
      <FooterLogo />
      <Explore />
      <Contact />
    </section>
  );
};

export default Footer;
