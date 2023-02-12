import React from "react";
import { Link } from "react-router-dom";
import styles from "./Service.module.css";

const Service = ({ image, icon, heading, description, link }) => {
  return (
    <Link to={`/${link}`} style={{ width: "100%" }}>
      <li className={styles.Service}>
        <div className={styles.serviceImg_cover}>
          <div className={styles.service_img}>
            <img src={image} alt="farmers" />
          </div>
          <p className={styles.service_icon}>{icon}</p>
        </div>
        <div className={styles.description}>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>
      </li>
    </Link>
  );
};

export default Service;
