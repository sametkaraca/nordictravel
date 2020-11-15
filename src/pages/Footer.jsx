import React from "react";
import style from "../styles/_footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <span className={style.footer_icon_up}>Y</span>
      <span className={style.footer_icon_down}>T</span>
    </footer>
  );
};
