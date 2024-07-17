import React from "react";
import style from "./style.module.css";
import logo from "../../image/LOGO.jpg";
import logo1 from "../../image/logo1.png";
import logo2 from "../../image/logo2.png";
import { Link } from "react-router-dom";

function Header() {
  const elements = [
    {
      element: "properties",
      path: "",
    },
    {
      element: "dashboard/activities",
      path: "",
    },
    {
      element: "list your property",
      path: "/",
    },
    {
      element: "contact us",
      path: "",
    },
    {
      element: "more",
      path: "",
    },
  ];

  const [underline, setUnderline] = React.useState(0);

  function underlineClick(index) {
    setUnderline(index);
  }
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style.components}>
        <div className={style.component}>
          {elements.map((element, index) => (
            <div
              className={style.element}
              key={index}
              onClick={() => {
                underlineClick(index);
              }}
            >
              <Link
                style={
                  underline === index
                    ? { textDecoration: "underline", lineHeight: "2px" }
                    : null
                }
                to={element.path}
              >
                {" "}
                {element.element}
              </Link>
            </div>
          ))}
        </div>
        <div className={style.line}>
          <p>|</p>
        </div>
        <div className={style.others}>
          <div className={style.otherLogo}>
            <img src={logo1} alt="login logo" />
          </div>
          <div className={style.otherLogo}>
            <img src={logo2} alt="login logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
