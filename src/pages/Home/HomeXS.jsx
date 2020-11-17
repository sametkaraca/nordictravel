import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import { HomeCountry } from "./HomeCountry";
import style from "../../styles/_home.module.scss";
import "swiper/components/pagination/pagination.scss";

import norwayImgSM from "../../assets/wallpapers/norway.jpg";
import swedenImgSM from "../../assets/wallpapers/sweden.jpg";
import finlandImgSM from "../../assets/wallpapers/finland.jpg";
import estoniaImgSM from "../../assets/wallpapers/estonia.jpg";
import icelandImgSM from "../../assets/wallpapers/iceland.jpg";
import denmarkImgSM from "../../assets/wallpapers/denmark.jpg";

SwiperCore.use([Pagination]);

const imagesSM = [
  norwayImgSM,
  swedenImgSM,
  finlandImgSM,
  estoniaImgSM,
  icelandImgSM,
  denmarkImgSM,
];

export const HomeXS = () => {
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
        {imagesSM.map((imageSM, index) => {
          return (
            <SwiperSlide key={index} className={style.home_swiper_slide}>
              <HomeCountry
                className={style.home_swiper_slide__img}
                image={imageSM}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
