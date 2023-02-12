import React from "react";
import Service from "./Service";

import { GiFruitBowl, GiTomato, GiFarmTractor, GiCow } from "react-icons/gi";
import farmServiceOne from "../../assets/farmer-service.jpg";
import OrganicSdervice from "../../assets/OrganicService.jpg";
import freshVegetable from "../../assets/organic-service.jpg";
import diaryService from "../../assets/diaryService.jpg";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <ul className={styles.Services}>
      <Service
        image={farmServiceOne}
        icon={<GiFarmTractor />}
        heading="Agro Input"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat
          repellat officiis."
        link="agroinputs"
      />
      <Service
        image={OrganicSdervice}
        icon={<GiFruitBowl />}
        heading="Agro Commodities"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat
          repellat officiis."
      />
      <Service
        image={freshVegetable}
        icon={<GiTomato />}
        heading="Organic Products"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat
          repellat officiis."
      />
      <Service
        image={diaryService}
        icon={<GiCow />}
        heading="Livestock products"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat
          repellat officiis."
      />
    </ul>
  );
};

export default Services;
