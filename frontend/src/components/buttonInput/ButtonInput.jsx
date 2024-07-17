import React from "react";
import style from "./style.module.css";
import star from "../../image/star.png";
function ButtonInput({ label, buttonarray, fn }) {
  return (
    <div className={style.container}>
      <label>
        {label}
        <img src={star} alt="star" />
      </label>
      <div className={style.buttonPallete}>
        {buttonarray.map((ba, index) => {
          return (
            <button key={index} onClick={() => fn(label, ba)}>
              {ba}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ButtonInput;
