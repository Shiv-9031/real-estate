import React from "react";
import style from "./style.module.css";
import Layout from "../../components/Layout/Layout";
import InnerLayout from "../../components/InnerLayout/InnerLayout";
import TextInput from "../../components/TextInput/TextInput";
import BUTF from "../../components/BrokeUnbrokeTextField/BUTF";
import Label from "../../components/label/Label";

function Page5({ fn }) {
  return (
    <Layout>
      <InnerLayout pagenumber={3} buttonlink={"/page-6"}>
        <div className={style.container}>
          <div className={style.container_1}>
            <TextInput label={"Rent"} fn={fn} />
            <TextInput label={"Security"} fn={fn} />
          </div>
          <div className={style.container_1}>
            <BUTF label={"Maintenance"} broken={false} fn={fn} />
            <BUTF label={"Maintenance"} broken={true} fn={fn} />
          </div>
          <div className={style.container_2}>
            <Label label={"Additional Pricing details to convey to agent"} />
            <textarea
              placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us"
              onChange={(e) => {
                fn("pricingDetais", e.target.value);
              }}
            />
          </div>
        </div>
      </InnerLayout>
    </Layout>
  );
}

export default Page5;
