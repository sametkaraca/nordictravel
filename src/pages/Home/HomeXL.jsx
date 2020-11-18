import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import { HomeCountry } from "./HomeCountry";
import style from "../../styles/_home.module.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination]);

export const HomeXL = ({ countries }) => {
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
        {countries.map((country) => {
          const { id, title, info, image_xl } = country;
          return (
            <SwiperSlide key={id} className={style.home_swiper_slide}>
              <HomeCountry
                className={style.home_swiper_slide__img}
                title={title}
                info={info}
                image={image_xl}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
