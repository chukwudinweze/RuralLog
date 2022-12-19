import React from "react";
import img from "../../assets/farmer-maize.jpeg";
import { FaQuoteRight } from "react-icons/fa";
import styles from "./Testimony.module.css";

const Testimony = () => {
  return (
    <article className={styles.Testimony}>
      <div className={styles.img_wrapper}>
        <div className={styles.customer_img}>
          <img src={img} alt="" />
        </div>
        <p className={styles.qoute_icon}>
          <FaQuoteRight />
        </p>
      </div>
      <div className={styles.content}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        ullam quaerat accusantium, quod placeat inventore.
      </div>
      <p className={styles.name}>Bright Oge</p>
    </article>
  );
};

export default Testimony;
