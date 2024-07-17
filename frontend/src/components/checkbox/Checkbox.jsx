import React from "react";
import style from "./style.module.css";
import Label from "../label/Label";
function Checkbox({ label, checkboxList, fn }) {
  return (
    <div className={style.Checkbox}>
      <Label label={label} />
      <div className={style.checkboxList}>
        {checkboxList.map((cl, index) => {
          return (
            <label key={index}>
              <input
                type="checkbox"
                onChange={(e) => {
                  fn(label, cl);
                }}
              />
              {cl}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Checkbox;
