import React from "react";
import style from "./style.module.css";
import Input from "../../components/Input/Input";
import Label from "../../components/label/Label";
import Layout from "../../components/Layout/Layout";
import Checkbox from "../../components/checkbox/Checkbox";
import InnerLayout from "../../components/InnerLayout/InnerLayout";
import { pageFourRadioArray, checkboxArray } from "./PageFourData";
import { icons } from "./importfiles";

function Page4({ fn }) {
  return (
    <Layout>
      <InnerLayout pagenumber={2} buttonlink={"/page-5"}>
        <div className={style.container}>
          <Label label="General Features" />
          {pageFourRadioArray.map((pfra, index) => {
            return (
              <Input
                type="radio"
                label={pfra.label}
                radioElements={pfra.list}
                starPosition="left"
                fn={fn}
              />
            );
          })}
          <div className={style.line}></div>
          {checkboxArray.map((cl, index) => {
            return (
              <>
                <Checkbox label={cl.label} checkboxList={cl.list} fn={fn} />
                <div className={style.line}></div>
              </>
            );
          })}
          <Label label="SOCIETY AMENITIES" />
          <div className={style.SocietyAmenities}>
            {icons.map((icon, index) => {
              return (
                <div className={style.societyAmenity} key={index}>
                  <img src={icon.icon} alt="cctv" />
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      fn(icon.label, "yes");
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </Layout>
  );
}

export default Page4;
