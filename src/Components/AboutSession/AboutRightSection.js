import React from "react";
import MaizeFarmer from "../../assets/maize-farmer-four.png";
import styles from "./AboutRightSection.module.css";
const AboutRightSection = () => {
  return (
    <section className={styles.AboutRightSection}>
      <div className={styles.farmers}>{/* backgroung image in use */}</div>
      <div className={styles.MaizeFarmerImg}>
        <img src={MaizeFarmer} alt="Ripe Fresh tomatoe" />
      </div>
    </section>
  );
};

export default AboutRightSection;
