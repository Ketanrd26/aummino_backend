import mongoose from "mongoose";

const blog = mongoose.Schema({
   

    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

});

const blogmodel = mongoose.model("blogs", blog);

export default blogmodel