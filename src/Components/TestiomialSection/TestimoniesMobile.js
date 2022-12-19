import React from "react";
import Testimony from "./Testimony";
import styles from "./Testimonies.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
// imnnport "swiper/css/autoplay";

const TestimoniesMobile = () => {
  return (
    <div className={styles.TestimoniesMobile}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Testimony />
        </SwiperSlide>
        <SwiperSlide>
          <Testimony />
        </SwiperSlide>
        <SwiperSlide>
          <Testimony />
        </SwiperSlide>
        <SwiperSlide>
          <Testimony />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimoniesMobile;
