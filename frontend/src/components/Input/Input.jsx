import React from "react";
import style from "./style.module.css";
import star from "../../image/star.png";

function Input({
  label,
  type,
  radioElements,
  placeholder,
  optionElement,
  fn,
  starPosition,
  textPlaceHolderfield,
  width,
}) {
  //parameters
  /**
   * label is used for labelling input field
   * type is used for different type of input field
   * radioElements is an array used for different option for radio button
   * placeholder is for input's placeholder
   * optionElement is an array used for different option for select button
   * fn is function for sending info
   * starPosition for setting position of star
   * textPlaceHolderfield for text with end placeholder for button text-placeholder
   * width is used to set width of element
   */
  return (
    <div className={style.container}>
      <p>
        {starPosition === "left" ? (
          <p>
            <img src={star} alt="star" /> {label}:
          </p>
        ) : (
          <p>
            {" "}
            {label}
            <img src={star} alt="star" />
          </p>
        )}
      </p>
      {type === "radio" && (
        <div className={style.radiobutton}>
          {radioElements.map((element, index) => {
            return (
              <div className={style.radiobutton_inner}>
                <input
                  id={element}
                  type="radio"
                  name={label}
                  value={element}
                  key={index}
                  onChange={(e) => {
                    fn(e.target.name, e.target.value);
                  }}
                />
                <label htmlFor={element}>{element}</label>
              </div>
            );
          })}
        </div>
      )}
      {type === "text" && (
        <div className={style.textfield} style={width && { width: width }}>
          <input
            type={type}
            placeholder={placeholder}
            name={label}
            onChange={(e) => {
              fn(e.target.name, e.target.value);
            }}
          />
        </div>
      )}

      {type === "Two-select" && (
        <div className={style.select}>
          <select>
            <option>+91</option>
          </select>
          <div className={style.selectfield}>
            <input
              type={type}
              placeholder={placeholder}
              name={label}
              onChange={(e) => {
                fn(e.target.name, e.target.value);
              }}
            />
          </div>
        </div>
      )}

      {type === "select" && (
        <div className={style.selectTypeField}>
          <select
            name={label}
            onChange={(e) => {
              fn(e.target.name, e.target.value);
            }}
          >
            {optionElement.map((oe, index) => {
              return (
                <option value={oe} key={index}>
                  {oe}
                </option>
              );
            })}
          </select>
        </div>
      )}

      {type === "text-placeholder" && (
        <div className={style.textPlaceHolderfield}>
          <input
            type={type}
            placeholder={placeholder}
            name={label}
            onChange={(e) => {
              fn(e.target.name, e.target.value);
            }}
          />
          <span>{textPlaceHolderfield}</span>
        </div>
      )}
    </div>
  );
}

export default Input;
