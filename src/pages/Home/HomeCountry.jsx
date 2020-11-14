import React from "react";
import style from "../../styles/_home.module.scss";

export const HomeCountry = ({ image }) => {
  return (
    <section className={style.home_country}>
      <picture className={style.home_country__picture}>
        {/* <source srcSet={sametXXL} media="(min-width: 1200px)" />
          <source srcSet={sametXL} media="(min-width: 768px)" />
          <source srcSet={sametMD} media="(min-width: 540px)" /> */}
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
      </div>
    </section>
  );
};
