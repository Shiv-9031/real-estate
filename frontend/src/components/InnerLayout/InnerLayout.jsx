import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

function InnerLayout({ children, pagenumber, buttonlink, buttonName }) {
  /**
   * children for inner output
   * pagenumber for page number
   * buttonlink for link for different page
   * buttonName for name over button
   */
  const header_1_Properties = [
    "property details",
    "location details",
    "features & amenities",
    "price details",
    "property images",
  ];

  const header_1_childCss = {
    background: "#edf2f8",
    boxShadow: `0px 2px 4px 0px #00000040, 0px 2px 6px 0px #ffffff inset,0px -2px 4px 0px #122b4933 inset`,
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.header_1}>
          {header_1_Properties.map((hp, index) => {
            return (
              <div
                className={style.header_1_1}
                key={index}
                style={pagenumber === index ? header_1_childCss : null}
              >
                <p>{hp}</p>
              </div>
            );
          })}
        </div>
        <div className={style.header_2}>
          <div
            className={style.header_2_rectangle}
            style={
              pagenumber === 0 ? null : { width: `${195.2 * pagenumber}px` }
            }
          ></div>
        </div>
      </div>
      <div className={style.children}>{children}</div>
      <div className={style.footer}>
        <p>
          Need Help? <span>Call 9999999999</span>
        </p>

        {pagenumber > 4 ? null : (
          <div className={style.buttondiv}>
            <Link to={buttonlink}>{buttonName ? buttonName : "NEXT"}</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default InnerLayout;
