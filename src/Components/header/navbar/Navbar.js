import React from "react";
import UpperNav from "./UpperNav";
import styles from "./Navbar.module.css";
import LowerNav from "./LowerNav";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <UpperNav />
      <LowerNav />
    </nav>
  );
};

export default Navbar;
