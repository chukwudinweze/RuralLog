import React from "react";
import AboutLeftSection from "./AboutLeftSection";
import AboutRightSection from "./AboutRightSection";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.AboutSection}>
      <AboutLeftSection />
      <AboutRightSection />
    </section>
  );
};

export default AboutSection;
