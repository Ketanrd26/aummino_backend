import mongoose, { model } from "mongoose";

const loginData = mongoose.Schema({
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        unique:true
    }
});

const loginUser = mongoose.model("loginUser" , loginData);

export default loginUser;