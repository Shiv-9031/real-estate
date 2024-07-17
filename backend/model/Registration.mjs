import mongoose from "mongoose";

const Registration = mongoose.Schema({
  "I am :": {
    type: String,
    required: [true, "please enter who you are "],
  },

  "Your Name": {
    type: String,
    required: [true, "please enter your name"],
  },

  Country: {
    type: String,
    required: [true, "please enter your country name"],
  },
  Phone: {
    type: String,
    required: [true, "please enter your contact number"],
  },
  email: {
    type: String,
  },
  CountryCode: {
    type: String,
  },
});

export default mongoose.model("client_Info", Registration);
