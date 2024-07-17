import React from "react";
import style from "./style.module.css";
import Layout from "../../components/Layout/Layout.jsx";
import InnerLayout from "../../components/InnerLayout/InnerLayout.jsx";
import Input from "../../components/Input/Input.jsx";
import { radioButton, textPlaceHolder, buttonlist } from "./pageTwoData";
import star from "../../image/star.png";
import ButtonInput from "../../components/buttonInput/ButtonInput";

function Page2({ fn }) {
  return (
    <Layout>
      <InnerLayout pagenumber={0} buttonlink={"/page-3"}>
        <div className={style.container}>
          {radioButton.map((rb, index) => {
            return (
              <Input
                label={rb.label}
                starPosition={rb.starPosition}
                type={rb.type}
                radioElements={rb.radioElement}
                fn={fn}
              />
            );
          })}

          <div className={style.twoTextInput}>
            {textPlaceHolder.map((tti, index) => {
              return (
                <Input
                  label={tti.label}
                  starPosition={tti.starPosition}
                  type={tti.type}
                  placeholder={tti.placeholder}
                  textPlaceHolderfield={tti.textPlaceHolderfield}
                  fn={fn}
                />
              );
            })}
          </div>

          <div className={style.content_4}>
            <div className={style.content_4_inner1}>
              <div className={style.content_4_inner1_1}>
                <label>
                  Property on Floor
                  <img src={star} alt="star" />{" "}
                </label>
                <input
                  type="text"
                  onChange={(e) => fn("propertyOnFloor", e.target.value)}
                />
              </div>
              <div className={style.content_4_inner1_1}>
                <label>
                  Total Floor
                  <img src={star} alt="star" />{" "}
                </label>
                <input
                  type="text"
                  onChange={(e) => fn("totalFloor", e.target.value)}
                />
              </div>
            </div>
            <div className={style.content_4_inner2}>
              <label>
                Property Facing
                <img src={star} alt="star" />{" "}
              </label>
              <select>
                <option>North </option>
                <option>South</option>
                <option>East</option>
                <option>West</option>
                <option>North-East</option>
              </select>
            </div>
          </div>

          {buttonlist.map((bl, index) => {
            return (
              <ButtonInput label={bl.label} buttonarray={bl.list} fn={fn} />
            );
          })}

          <div className={style.propertyDescription}>
            <label>
              Property Description <img src={star} alt="star" />
            </label>
            <textarea
              onChange={(e) => {
                fn("propertyDescription", e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </InnerLayout>
    </Layout>
  );
}

export default Page2;
