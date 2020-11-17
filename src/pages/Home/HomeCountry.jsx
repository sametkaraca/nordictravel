import React from "react";
import style from "../../styles/_home.module.scss";
import playIcon from "../../assets/play.svg";

import twitterIcon from "../../assets/twitter.svg";
import facebookIcon from "../../assets/facebook.svg";
export const HomeCountry = (props) => {
  return (
    <section className={style.home_country}>
      <picture className={style.home_country__picture}>
        <img
          srcSet={props.image}
          alt="Samet Banner"
          className={style.home_country__picture__img}
        />
      </picture>

      <div className={style.home_country_container}>
        <h1 className={style.home_country_container__title}>
          Wonders
          <br />
          Default
        </h1>
        <p className={style.home_country_container__content}>default</p>
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

        <div className={style.home_country_container_icons}>
          <img
            className={style.home_country_container_icons__img}
            src={twitterIcon}
            alt={`Twitter`}
          />
          <img
            className={style.home_country_container_icons__img}
            src={facebookIcon}
            alt={`Facebook`}
          />
        </div>
      </div>
    </section>
  );
};
