import React from "react";
import BlackHeader from "../global/BlackHeader";
import GreenHeader from "../global/GreenHeader";
import MainButton from "../global/MainButton";
import { AiOutlineCheck } from "react-icons/ai";
import styles from "./AboutLeftSection.module.css";

const AboutLeftSection = () => {
  return (
    <section className={styles.AboutLeftSection}>
      <GreenHeader label="Get to Know Ruralog" />
      <div className={styles.about_us_header}>
        <BlackHeader label="RURALOG IS THE AGRICULTURE AND ORGANIC FARM" />
      </div>

      <div className={styles.flowerIcon}></div>
      <GreenHeader
        style={{ fontSize: "1.25rem", color: "red" }}
        label="We’ve 20 years of
        agriculture farming experience"
      />
      <p className={styles.about_us_description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        dolore veniam.
      </p>
      <article className={styles.about_us_summary}>
        <p>
          <AiOutlineCheck />
        </p>
        <p> Just A click away from our farmers.</p>
      </article>
      <article className={styles.about_us_summary}>
        <p>
          <AiOutlineCheck />
        </p>
        <p> You get it fresh and raw right from farm.</p>
      </article>
      <MainButton link="#about" label="Learn More" />
    </section>
  );
};

export default AboutLeftSection;
