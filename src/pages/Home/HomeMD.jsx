import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import { HomeCountry } from "./HomeCountry";
import style from "../../styles/_home.module.scss";
import "swiper/components/pagination/pagination.scss";

import norwayImgMD from "../../assets/wallpapers/norway@x2.jpg";
import swedenImgMD from "../../assets/wallpapers/sweden@x2.jpg";
import finlandImgMD from "../../assets/wallpapers/finland@x2.jpg";
import estoniaImgMD from "../../assets/wallpapers/estonia@x2.jpg";
import icelandImgMD from "../../assets/wallpapers/iceland@x2.jpg";
import denmarkImgMD from "../../assets/wallpapers/denmark@x2.jpg";

const imagesMD = [
  norwayImgMD,
  swedenImgMD,
  finlandImgMD,
  estoniaImgMD,
  icelandImgMD,
  denmarkImgMD,
];

SwiperCore.use([Pagination]);

export const HomeMD = () => {
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
        {imagesMD.map((imageMD, index) => {
          return (
            <SwiperSlide key={index} className={style.home_swiper_slide}>
              <HomeCountry
                className={style.home_swiper_slide__img}
                image={imageMD}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
