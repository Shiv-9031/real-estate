import React from "react";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import style from "./style.module.css";
import bulletImage from "../../image/image 29.png";
import { sendPostRequest } from "../../helper/sendHtttprequest";
import { bulletsPoints, country, owner } from "./PageOnedata";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page1() {
  const [PageOneInfo, setPageOneInfo] = React.useState({
    "I am ": "",
    "Your Name": "",
    CountryCode: "",
    Country: "",
    Phone: "",
    Email: "",
  });

  const [next, setNext] = React.useState(true); // for next button

  //function for receiving data from input

  function PageOneReceiveInfoFunction(name, info) {
    if (name === "" || info === "") {
      toast.error("Please fill the form");
      return;
    }
    setPageOneInfo({ ...PageOneInfo, [name]: info });
  }

  //function for sending data

  async function sendRequest() {
    try {
      const response = await sendPostRequest(PageOneInfo, "registration");
      console.log(response.data);
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.frame541}>
          <p>Sell or Rent your Property For Free</p>
          <p>
            Whether you’re ready to sell or looking for answers, we’ll guide you
            with data and expertise specific to your needs.
          </p>
        </div>
        <div className={style.frame586}>
          <div className={style.frame653}>
            <p>Upload your property in 4 simple steps</p>
            <div className={style.frame652}>
              {bulletsPoints.map((bullet, index) => {
                return (
                  <div className={style.frame654} key={index}>
                    <img src={bulletImage} alt="bullet_image" />
                    <p>{bullet}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.landlord_details}>
            <div className={style.landlord_detail_1}>
              <p>LETS GET YOU STARTED !</p>
            </div>
            {next === true ? (
              <div className={style.landlord_detail_2}>
                <div className={style.landlord_detail_2_inner}>
                  <Input
                    label="I am "
                    type="radio"
                    radioElements={owner}
                    fn={PageOneReceiveInfoFunction}
                    starPosition="left"
                  />
                  <Input
                    label="Your Name"
                    type="text"
                    placeholder="Name"
                    fn={PageOneReceiveInfoFunction}
                  />
                  <Input
                    label="Country"
                    type="select"
                    placeholder="Country"
                    optionElement={country}
                    fn={PageOneReceiveInfoFunction}
                  />
                  <Input
                    label="Phone"
                    type="Two-select"
                    placeholder="000-000-0000"
                    fn={PageOneReceiveInfoFunction}
                  />
                  <p>or</p>
                  <Input
                    label="Email"
                    type="text"
                    placeholder="Email"
                    fn={PageOneReceiveInfoFunction}
                  />
                </div>
              </div>
            ) : (
              <div className={style.landlord_detail_2}>
                <Input
                  type="text"
                  placeholder="0 0 0 0"
                  label={`Enter OTP sent on ${PageOneInfo.Phone}`}
                  starPosition="right"
                />
              </div>
            )}
            <div className={style.landlord_detail_3}>
              <p>
                Need Help? <span>Call 9999999999</span>
              </p>
              <button
                onClick={() => {
                  setNext(false);
                  sendRequest();
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page1;
