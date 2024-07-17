import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/";

async function sendPostRequest(data, requestUrl) {
  try {
    const res = await axios.post(BASE_URL + requestUrl, data);
    if (res) {
      return res;
    }
  } catch (error) {
    console.log(error);
  }
}

export { sendPostRequest };
