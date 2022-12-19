import React from "react";
import { MdOutlineEmail, MdLocationOn, MdFacebook } from "react-icons/md";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import styles from "./UpperNav.module.css";

const UpperNav = () => {
  return (
    <section className={styles.UpperNav}>
      <article className={styles.address}>
        <a href="mailto: brightOgechukwu@gmail.com">
          <MdOutlineEmail />
          needhelp@farmers.com
        </a>
        <p>
          <MdLocationOn />
          80 Idejo Victoria Island, Lagos
        </p>
      </article>
      <div className={styles.socialIcons}>
        <a href="twitterlink">
          <AiOutlineTwitter />
        </a>
        <a href="facebooklink">
          <MdFacebook />
        </a>
        <a href="pinterestlink">
          <FaPinterestP />
        </a>
        <a href="instagramlink">
          <AiOutlineInstagram />
        </a>
      </div>
    </section>
  );
};

export default UpperNav;
