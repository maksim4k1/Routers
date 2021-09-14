import React from "react";
import { NavLink } from 'react-router-dom';
import style from "./Aside.module.css";

function Aside () {
  return(
    <div className={style.aside}>
      <nav className={style.navigation}>
        <NavLink className={style.link} to="/banana">Банан</NavLink>
        <NavLink className={style.link} to="/orange">Апельсин</NavLink>
        <NavLink className={style.link} to="/pear">Груша</NavLink>
        <NavLink className={style.link} to="/peach">Персик</NavLink>
      </nav>
    </div>
  );
}

export default Aside;