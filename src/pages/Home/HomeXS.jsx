import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import { HomeCountry } from "./HomeCountry";
import style from "../../styles/_home.module.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination]);

export const HomeXS = ({ countries }) => {
  return (
    <section className={style.home}>
      <Swiper
        className={style.home_swiper}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {countries.map((country) => {
          const { id, title, info, image } = country;
          return (
            <SwiperSlide key={id} className={style.home_swiper_slide}>
              <HomeCountry
                className={style.home_swiper_slide__img}
                title={title}
                info={info}
                image={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
