import multer from 'multer';
import blogmodel from '../model/blogModel.js';
import dateFormat from 'dateformat';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const blogItems = async (req, res) => {
  const { title, category, date, description } = req.body; 
  const image = req.file; 

  console.log('Received data:', { title, category, date, description });

  try {
    if (!title || !category || !date || !description) {
      return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    const dateformat = dateFormat(date, 'dd/mm/yyyy');

    const data = new blogmodel({
      title,
      image: image ? image.buffer.toString('base64') : null, // Store the image as base64 string
      category,
      date: dateformat,
      description,
    });

    await data.save();

    res.status(200).json({ status: 'success', message: 'blog uploaded', listObject: data });
  } catch (error) {
    console.error('Error saving blog:', error);
    res.status(400).json({ status: 'error', message: 'something went wrong' });
  }
};

export default upload;



export const deleteBlogItems = async (req,res) =>{
try {
  

  const {title,image,category,date,description} = req.body;

const _id = req.params._id;

const deltedBlog = {
  title,
  image,
  category,
  date,
  description,
  _id
}

  const removeBlog = await blogmodel.findByIdAndDelete(_id, deltedBlog,{new:true});

  if(!removeBlog){
    res.status(400).json({status:"error", message:"something error"})
  }else{
    res.status(200).json({status:"success", message:"Blog Deleted"})
  }

} catch (error) {
  
}
}
