import React from "react";
import HeroService from "./HeroService";
import FreshFromFarm from "../../../assets/HeroIconOne.png";
import Organic from "../../../assets/icons8-agriculture-85.png";
import NaturalHealthy from "../../../assets/icons8-fruit-64.png";
import styles from "./HeroServices.module.css";

const HeroServices = () => {
  return (
    <ul className={styles.HeroServices}>
      <HeroService label="Fresh From Farm" icon={FreshFromFarm} />
      <HeroService label="All Organic" icon={Organic} />
      <HeroService label="Natural and Heathy" icon={NaturalHealthy} />
    </ul>
  );
};

export default HeroServices;
