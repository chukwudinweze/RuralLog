import React from "react";
import BlackHeader from "../global/BlackHeader";
import GreenHeader from "../global/GreenHeader";
import Services from "./Services";
import styles from "./ServiceSection.module.css";

const ServiceSection = () => {
  return (
    <section className={styles.ServiceSection}>
      <div className={styles.header}>
        <GreenHeader label="What We’re Doing" />
        <BlackHeader label="SERVICES WE’RE OFFERING" />
      </div>
      <div className={styles.service_list}>
        <Services />
      </div>
    </section>
  );
};

export default ServiceSection;
