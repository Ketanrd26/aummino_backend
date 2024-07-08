import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  contact:{
    type:Number,
    required:true
  },
  message:{
    type:String,
    required:true
  }
});

const userData = mongoose.model("customerData", userModel);

export default userData;
