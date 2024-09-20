import React from "react";
import style from "./style.module.css";
import star from "../../image/star.png";
function ButtonInput({ label, buttonarray, fn }) {
  let [choose, setChoose] = React.useState();
  console.log(choose);

  return (
    <div className={style.container}>
      <label>
        {label}
        <img src={star} alt="star" />
      </label>
      <div className={style.buttonPallete}>
        {buttonarray.map((ba, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                fn(label, ba);
                setChoose(index);
              }}
              style={
                choose === index
                  ? { background: "#000000d9", color: "white" }
                  : null
              }
            >
              {ba}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ButtonInput;
