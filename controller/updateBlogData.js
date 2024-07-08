import blogmodel from "../model/blogModel.js";
import multer from "multer";

const storage = multer.memoryStorage();
const updateBlogImage = multer({storage});
export const updatedBlogData = async (req,res)=>{

 try {
    const {title, category, date, description } = req.body;
    const image = req.file
    const _id =  req.params._id;


    const updatedBlogData = {
       
        title,
        category,
        image : image ? image.buffer.toString("base64") : null,
        date,
        description,
        _id
    }

    const updatedblog = await blogmodel.findByIdAndUpdate(_id, updatedBlogData, {new:true});
    
if(!updatedblog){
    res.status(400).json({message:"error"})
}

    res.status(200).json({result:"updated succesfully"})
 } catch (error) {
    res.status(400).json({message:"error"})
 }
}

export default updateBlogImage