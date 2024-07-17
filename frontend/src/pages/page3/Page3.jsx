import React from "react";
import style from "./style.module.css";
import Layout from "../../components/Layout/Layout";
import InnerLayout from "../../components/InnerLayout/InnerLayout";
import SelectInput from "../../components/selectInput/SelectInput";
import Label from "../../components/label/Label";

function Page3({ fn }) {
  const LocationDetail = [
    {
      label1: "Building/Scociety Name",
      label2: "Locality /Area",
    },
    {
      label1: "LandMark/Street Name",
      label2: "City",
    },
  ];
  return (
    <Layout>
      <InnerLayout pagenumber={1} buttonlink={"/page-4"}>
        <div className={style.container}>
          {LocationDetail.map((ld, index) => {
            return (
              <div className={style.container_1}>
                <SelectInput label={ld.label1} fn={fn} />
                <SelectInput label={ld.label2} fn={fn} />
              </div>
            );
          })}
          <div className={style.mapGroup}>
            <Label label="Mark Locality on Map" />
            <div className={style.map}>
              <h1>Map</h1>
            </div>
          </div>
        </div>
      </InnerLayout>
    </Layout>
  );
}

export default Page3;
