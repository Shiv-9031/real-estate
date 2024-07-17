import Layout from "../../components/Layout/Layout";
import style from "./style.module.css";
import Label from "../../components/label/Label";
import { Link } from "react-router-dom";

function Page8() {
  return (
    <Layout>
      <div className={style.container}>
        <Label
          label={"Thank you for listing your property with us,"}
          fontSize={"22px"}
          fontWeight={"500"}
        />
        <Label
          label={
            "Your listing will be reveiwed and will go live within 24 hours."
          }
          fontSize={"18px"}
          fontWeight={"400"}
        />

        <Label
          label={
            "We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference. "
          }
          fontSize={"18px"}
          fontWeight={"400"}
        />

        <Label label={"-Dylan Estates "} fontSize={"18px"} fontWeight={"400"} />

        <div className={style.Buttons}>
          <div className={style.Button}>
            <Link>Edit Property Listing</Link>
          </div>
          <div className={style.Button}>
            <Link>Preview Property Listing</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page8;
