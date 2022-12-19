import React from "react";
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <article className={styles.Contact}>
      <h3>Contact</h3>
      <ul className={styles.contact_list}>
        <li>
          <a href="tel:234-80">
            <p className={styles.icon}>
              <FaPhoneSquareAlt />
            </p>
            <p>234-80</p>
          </a>
        </li>
        <li>
          <a href="mailto: brightOgechukwu@gmail.com">
            <p className={styles.icon}>
              <MdOutlineEmail />
            </p>
            <p> needhelp@farmers.com</p>
          </a>
        </li>
        <li>
          <div>
            <p className={styles.icon}>
              <MdLocationOn />
            </p>
            80 Idejo Victoria Island, Lagos
          </div>
        </li>
      </ul>
    </article>
  );
};

export default Contact;
