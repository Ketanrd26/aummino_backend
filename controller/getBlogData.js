import blogmodel from "../model/blogModel.js";

export const getBlogItems = async (req, res) => {
    try {
      const blogs = await blogmodel.find({});
      res.status(200).json({ status: "success", blogsData: blogs });
    } catch (error) {
      res.status(400).json({ status: "error", message: "something went wrong" });
    }
  };

  export const getBlogsOnId = async (req, res)=>{
    try {
      const _id = req.params._id;




      const blogsId = await blogmodel.findById(_id);

      if(!blogsId){
        res.status(400).json({message:"error"})
      }

      res.status(200).json({status:"success", listObject:blogsId})

    } catch (error) {
     res.status(500).json(error) 
    }
  }