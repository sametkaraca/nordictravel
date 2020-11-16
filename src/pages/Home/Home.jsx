import React, { useState, useEffect } from "react";
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

import norwayImgMD from "../../assets/wallpapers/norway@x2.jpg";
import swedenImgMD from "../../assets/wallpapers/sweden@x2.jpg";
import finlandImgMD from "../../assets/wallpapers/finland@x2.jpg";
import estoniaImgMD from "../../assets/wallpapers/estonia@x2.jpg";
import icelandImgMD from "../../assets/wallpapers/iceland@x2.jpg";
import denmarkImgMD from "../../assets/wallpapers/denmark@x2.jpg";

import norwayImgXL from "../../assets/wallpapers/norway@x3.jpg";
import swedenImgXL from "../../assets/wallpapers/sweden@x3.jpg";
import finlandImgXL from "../../assets/wallpapers/finland@x3.jpg";
import estoniaImgXL from "../../assets/wallpapers/estonia@x3.jpg";
import icelandImgXL from "../../assets/wallpapers/iceland@x3.jpg";
import denmarkImgXL from "../../assets/wallpapers/denmark@x3.jpg";

SwiperCore.use([Pagination]);

const imagesSM = [
  norwayImgSM,
  swedenImgSM,
  finlandImgSM,
  estoniaImgSM,
  icelandImgSM,
  denmarkImgSM,
];
const imagesMD = [
  norwayImgMD,
  swedenImgMD,
  finlandImgMD,
  estoniaImgMD,
  icelandImgMD,
  denmarkImgMD,
];
const imagesXL = [
  norwayImgXL,
  swedenImgXL,
  finlandImgXL,
  estoniaImgXL,
  icelandImgXL,
  denmarkImgXL,
];

export const Home = () => {
  const size = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  if (size.width < 1024 && size.width >= 540) {
    //MD
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
  }

  if (size.width < 1920) {
    //XL
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
  }

  return (
    //XS
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
