import React from "react";
import Layout from "../../components/Layout/Layout";
import style from "./style.module.css";
import InnerLayout from "../../components/InnerLayout/InnerLayout";
import Label from "../../components/label/Label";
import { Link } from "react-router-dom";

function Page7() {
  return (
    <Layout>
      <InnerLayout pagenumber={5}>
        <div className={style.container}>
          <div className={style.container_sub_1}>
            <Label label={"POST PROPERTY ON DYLAN STATE?"} Star={true} />
            <div className={style.container_sub_2}>
              <div className={style.continueButton}>
                <Link to={"/page-8"}>Continue</Link>
              </div>
              <p>
                By continuing you agree to our
                <Link>Terms and Conditions & Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </Layout>
  );
}

export default Page7;
