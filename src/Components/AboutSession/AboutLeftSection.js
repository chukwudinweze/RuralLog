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
        We have over 5 years of agriculture farming experience in providing
        advisory services, creating an ecosystem that connects various players
        within the sector. Services range across stakeholders not limited to the
        farmers, agro-input suppliers, mechanization service providers,
        agro-dealers...
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
      <MainButton link="/regfarmer" label="Become our Farmer" />
    </section>
  );
};

export default AboutLeftSection;
