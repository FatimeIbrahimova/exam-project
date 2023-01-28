import React from "react";
import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroSec = () => {
  return (
    <div className="hero-sec">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg"
            alt="img"
          />
          <div className="img-desc">
            <h3>Women Collection 2018</h3>
            <h1>New Season</h1>
            <button className="hero-btn">Shop now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg"
            alt="img"
          />
          <div className="img-desc">
            <h3>Men Collection 2018</h3>
            <h1>Jackets & Coats</h1>
            <button className="hero-btn">Shop now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg"
            alt="img"
          />
          <div className="img-desc">
            <h3>Men Collection 2018</h3>
            <h1>New Arrivals</h1>
            <button className="hero-btn">Shop now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSec;
