import React from "react";
import style from "../../styles/_home.module.scss";
import playIcon from "../../assets/play.svg";

export const HomeCountry = ({ image }) => {
  console.log(image);
  return (
    <section className={style.home_country}>
      <picture className={style.home_country__picture}>
        {/* <source srcSet={imageMD} media="(min-width: 1200px)" />
        <source srcSet={imageMD} media="(min-width: 768px)" />
        <source srcSet={imageMD} media="(min-width: 540px)" /> */}
        <img
          srcSet={image}
          alt="Samet Banner"
          className={style.home_country__picture__img}
        />
      </picture>
      <div className={style.home_country_container}>
        <h1 className={style.home_country_container__title}>
          Best of <br />
          Norway
        </h1>
        <p className={style.home_country_container__content}>
          Behold the cacophony of bazaars and the shimmering sahara when you
          journey to Morocco’s charming cities of Casablanca, Fes and Marrakesh,
          including visits to the life-giving oasis of Tinghir, Todra Gorge and
          Ouarzazate
        </p>
        <button className={style.home_country_container__button}>
          Book Now
        </button>
        <a className={style.home_country_container__info}>More Info</a>

        <a
          href="www.youtube.com"
          className={style.home_country_container__play}
        >
          <img
            src={playIcon}
            alt="Play"
            className={style.home_country_container__play__img}
          />{" "}
        </a>

        <span className={style.home_country_container__watch}>Watch Real</span>
      </div>
    </section>
  );
};
