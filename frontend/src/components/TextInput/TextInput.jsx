import React from "react";
import style from "./style.module.css";
import star from "../../image/star.png";
import month from "../../image/month.png";
import rupee from "../../image/rupee.png";

function TextInput({ label, placeholder, fn }) {
  return (
    <div className={style.container}>
      <label>
        {label}
        <img src={star} alt="star" />
      </label>
      <div className={style.Input}>
        <input
          placeholder={placeholder}
          fn={(e) => {
            fn(label, e.target.value);
          }}
        />
        <img id={"rupee"} src={rupee} alt="rupee" />
        <img id={"month"} src={month} alt="month" />
      </div>
    </div>
  );
}

export default TextInput;
