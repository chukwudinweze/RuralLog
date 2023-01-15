import React from "react";
import styles from "./Hero.module.css";
import Underline from "../../assets/headingUnderline.png";
import MainButton from "../global/MainButton";
import HeroServices from "./HeroServices/HeroServices";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <h5>Always Fresh from Farm</h5>
      <div className={styles.underline}>
        <img src={Underline} alt="gold line" />
      </div>
      <h1>Agriculture</h1>
      <MainButton label={"Discover More"} link={"/agentsignup"} />
      <HeroServices />
    </section>
  );
};

export default Hero;
