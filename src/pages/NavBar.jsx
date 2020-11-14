import React, { useState } from "react";
import style from "../styles/_navbar.module.scss";
import vikingIcon from "../assets/viking.svg";
import menuIcon from "../assets/menu.svg";

export const NavBar = () => {
  return (
    <nav className={style.nav}>
      <img className={style.nav_logo} src={vikingIcon} alt="logo" />

      <a className={style.nav_menu} to={`#`}>
        <img className={style.nav_menu__img} src={menuIcon} alt="menu" />
      </a>
    </nav>
  );
};
