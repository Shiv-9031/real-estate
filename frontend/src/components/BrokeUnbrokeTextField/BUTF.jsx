import React from "react";
import style from "./style.module.css";
import Label from "../label/Label";
import rupee from "../../image/rupee.png";

function BUTF({ label, broken, fn }) {
  return (
    <div className={style.container}>
      <Label label={label} />
      {!broken ? (
        <select
          onChange={(e) => {
            fn(label, e.target.value);
          }}
        >
          <option>Included in Rent</option>
          <option>Extra Maintenance</option>
        </select>
      ) : (
        <div className={style.broken}>
          <img src={rupee} alt="rupee" />
          <input
            type="text"
            placeholder="Maintenance"
            onChange={(e) => {
              fn(label, e.target.value);
            }}
          />
          <select
            onChange={(e) => {
              fn("modeOfPayment", e.target.value);
            }}
          >
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default BUTF;
