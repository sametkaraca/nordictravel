import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/_navbar.module.scss";
import vikingIcon from "../assets/viking.svg";
import menuIcon from "../assets/menu.svg";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenClass = isOpen ? style.open : "";
  const navItems = ["Home", "Discover", "Destinations", "Booking", "Contact"];

  return (
    <nav className={style.nav}>
      <img className={style.nav_logo} src={vikingIcon} alt="logo" />
      <a className={style.nav_icon} href="#" onClick={() => setIsOpen(!isOpen)}>
        <img className={style.nav_icon__img} src={menuIcon} alt="menu" />
      </a>

      <ul className={[style.nav_menu, isOpenClass].join(" ")}>
        {navItems.map((item) => {
          return (
            <li key={item} className={style.nav_menu_list}>
              <a
                href={item}
                className={style.nav_menu_list_item}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
