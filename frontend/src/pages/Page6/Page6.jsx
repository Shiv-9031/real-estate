import React from "react";
import style from "./style.module.css";
import Layout from "../../components/Layout/Layout";
import InnerLayout from "../../components/InnerLayout/InnerLayout";
import Label from "../../components/label/Label";
import uploadPhoto from "../../image/camera.png";

function Page6() {
  return (
    <Layout>
      <InnerLayout
        pagenumber={4}
        buttonName={"SAVE & POST"}
        buttonlink={"/page-7"}
      >
        <div className={style.container}>
          <Label
            label={"Add Photos /Videos to attracts more tenants !"}
            fontSize={"18px"}
          />
          <div className={style.container_1}>
            <Label
              label={
                "Add Photos of living room, bedroom, bathroom, floor,doors, kitchen, balcony, location map, neighbourhood etc "
              }
            />
          </div>

          <div className={style.uploadPhotos}>
            <div className={style.uploadPhoto}>
              <img src={uploadPhoto} alt="uploadPhoto" />
              <p>+ Add Photos Now</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </Layout>
  );
}

export default Page6;
