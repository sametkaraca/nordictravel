import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import { HomeCountry } from "./HomeCountry";
import style from "../../styles/_home.module.scss";
import "swiper/components/pagination/pagination.scss";

import norwayImgXL from "../../assets/wallpapers/norway@x3.jpg";
import swedenImgXL from "../../assets/wallpapers/sweden@x3.jpg";
import finlandImgXL from "../../assets/wallpapers/finland@x3.jpg";
import estoniaImgXL from "../../assets/wallpapers/estonia@x3.jpg";
import icelandImgXL from "../../assets/wallpapers/iceland@x3.jpg";
import denmarkImgXL from "../../assets/wallpapers/denmark@x3.jpg";

const imagesXL = [
  norwayImgXL,
  swedenImgXL,
  finlandImgXL,
  estoniaImgXL,
  icelandImgXL,
  denmarkImgXL,
];

SwiperCore.use([Pagination]);

export const HomeXL = () => {
  return (
    <section className={style.home}>
      <Swiper
        className={style.home_swiper}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {imagesXL.map((imageXL, index) => {
          return (
            <SwiperSlide key={index} className={style.home_swiper_slide}>
              <HomeCountry
                className={style.home_swiper_slide__img}
                image={imageXL}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
