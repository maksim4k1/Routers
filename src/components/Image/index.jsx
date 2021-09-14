import React from "react";
import style from "./Image.module.css";

function Image ({name, src}) {
  return(
    <div className={style.content}>
      <h1 className={style.title}>{name}</h1>
      <img src={src} alt={name} className={style.image} />
    </div>
  );
}

export default Image;