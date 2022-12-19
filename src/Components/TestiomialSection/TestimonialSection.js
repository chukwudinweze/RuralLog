import React from "react";
import BlackHeader from "../global/BlackHeader";
import GreenHeader from "../global/GreenHeader";
import Testimonies from "./Testimonies";
import styles from "./TestimonialSection.module.css";
import TestimoniesMobile from "./TestimoniesMobile";

const TestimonialSection = () => {
  return (
    <section className={styles.TestimonialSection}>
      <GreenHeader label="Our Testimonials" />
      <BlackHeader label="WHAT THEY’RE TAKING ABOUT" />
      <Testimonies />
      <TestimoniesMobile />
    </section>
  );
};

export default TestimonialSection;
