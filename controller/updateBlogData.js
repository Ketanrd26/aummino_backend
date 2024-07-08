import blogmodel from "../model/blogModel.js";

export const updatedBlogData = async (req,res)=>{

 try {
    const {title, image, category, date, description } = req.body;
    const _id =  req.params._id;


    const updatedBlogData = {
        image,
        title,
        category,
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