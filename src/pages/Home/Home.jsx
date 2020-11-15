import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import { HomeCountry } from "./HomeCountry";
import style from "../../styles/_home.module.scss";
import "swiper/components/pagination/pagination.scss";
import norwayImgSM from "../../assets/wallpapers/norway.png";
import swedenImgSM from "../../assets/wallpapers/sweden.png";
import finlandImgSM from "../../assets/wallpapers/finland.png";
import estoniaImgSM from "../../assets/wallpapers/estonia.png";
import icelandImgSM from "../../assets/wallpapers/iceland.png";
import denmarkImgSM from "../../assets/wallpapers/denmark.png";

SwiperCore.use([Pagination]);

export const Home = () => {
  return (
    <>
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
          <SwiperSlide className={style.home_swiper_slide}>
            <HomeCountry
              className={style.home_swiper_slide__img}
              image={norwayImgSM}
            />
          </SwiperSlide>
          <SwiperSlide className={style.home_swiper_slide}>
            <HomeCountry
              className={style.home_swiper_slide__img}
              image={swedenImgSM}
            />
          </SwiperSlide>
          <SwiperSlide className={style.home_swiper_slide} image={finlandImgSM}>
            <HomeCountry
              className={style.home_swiper_slide__img}
              image={finlandImgSM}
            />
          </SwiperSlide>
          <SwiperSlide className={style.home_swiper_slide} image={estoniaImgSM}>
            <HomeCountry
              className={style.home_swiper_slide__img}
              image={estoniaImgSM}
            />
          </SwiperSlide>
          <SwiperSlide className={style.home_swiper_slide} image={icelandImgSM}>
            <HomeCountry
              className={style.home_swiper_slide__img}
              image={icelandImgSM}
            />
          </SwiperSlide>
          <SwiperSlide className={style.home_swiper_slide} image={denmarkImgSM}>
            <HomeCountry
              className={style.home_swiper_slide__img}
              image={denmarkImgSM}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
