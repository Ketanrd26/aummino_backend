import express from 'express';
import { blogItems } from '../controller/blogData.js';
import { getBlogItems } from '../controller/getBlogData.js';
import upload from '../controller/blogData.js'; // Import the multer upload middleware
import {updatedBlogData} from "../controller/updateBlogData.js"
import {deleteBlogItems} from "../controller/blogData.js"
import {getBlogsOnId} from "../controller/getBlogData.js"

const blogRouter = express.Router();

blogRouter.post('/blogsData',upload.single('image'),blogItems);
blogRouter.get('/blogs', getBlogItems);
blogRouter.put("/updated/:_id",updatedBlogData);
blogRouter.delete("/deleteBlog/:_id",deleteBlogItems);
blogRouter.get("/blogByID/:_id",getBlogsOnId )
export default blogRouter;
