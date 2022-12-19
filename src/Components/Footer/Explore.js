import React from "react";
import styles from "./Explore.module.css";

const Explore = () => {
  return (
    <article className={styles.Explore}>
      <h3>Explore</h3>
      <ul className={styles.explore_list}>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Our Farmers">Our Farmers</a>
        </li>
        <li>
          <a href="#New Project">New Project</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </article>
  );
};

export default Explore;
