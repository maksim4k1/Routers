import React from "react";
import { NavLink } from 'react-router-dom';
import style from "./Header.module.css"

function Header () {
  return(
    <header className={style.header}>
      <div className={style.container + " container"}>
        <NavLink className={style.logo} to="/">Фрукты</NavLink>
        <nav className={style.navigation}>
          <NavLink className={style.link} to="/banana">Банан</NavLink>
          <NavLink className={style.link} to="/orange">Апельсин</NavLink>
          <NavLink className={style.link} to="/pear">Груша</NavLink>
          <NavLink className={style.link} to="/peach">Персик</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;