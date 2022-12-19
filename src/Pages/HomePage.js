import React from "react";
import AboutSection from "../Components/AboutSession/AboutSection";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/header/Header";
import MobileNav from "../Components/header/MobileNav/MobileNav";
import Hero from "../Components/hero/Hero";
import ServiceSection from "../Components/ServiceSection/ServiceSection";
import TestimonialSection from "../Components/TestiomialSection/TestimonialSection";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={styles.HomePage}>
      <Header />
      <MobileNav />
      <Hero />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
      <Footer />
    </section>
  );
};

export default HomePage;
