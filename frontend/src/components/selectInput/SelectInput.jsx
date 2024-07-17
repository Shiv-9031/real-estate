import React from "react";
import style from "./style.module.css";
import star from "../../image/star.png";
import downarrow from "../../image/downarrow.png";

function SelectInput({ label, placeholder, fn }) {
  return (
    <div className={style.container}>
      <label>
        {label}
        <img src={star} alt="star" />
      </label>
      <div className={style.Input}>
        <input
          placeholder={placeholder}
          onChange={(e) => fn(label, e.target.value)}
        />
        <img src={downarrow} alt="downarrow" />
      </div>
    </div>
  );
}

export default SelectInput;
