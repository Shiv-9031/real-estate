import React from "react";
import style from "./style.module.css";
import star from "../../image/star.png";
function Label({ label, Star, fontWeight, fontSize }) {
  return (
    <label style={{ fontWeight: fontWeight, fontSize: fontSize }}>
      {label}
      {Star ? <img src={star} alt="star" /> : null}
    </label>
  );
}

export default Label;
