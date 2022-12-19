import React from "react";
import styles from "./LowerNav.module.css";
import { BsSearch } from "react-icons/bs";

const LowerNav = () => {
  return (
    <ul className={styles.LowerNav}>
      <li>
        <a className={styles.home_nav} href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#service">Services</a>
      </li>
      <li>
        <a href="#products">Products</a>
      </li>
      <li>
        <a href="#farmers">Farmers</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <p href="#contact">
          <BsSearch />
        </p>
      </li>
    </ul>
  );
};

export default LowerNav;
