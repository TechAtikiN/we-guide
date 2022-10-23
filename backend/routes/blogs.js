import express from 'express'
const router = express.Router();
import { createBlog, getBlogs, getBlog } from '../controllers/blogController.js';

// {BLOGS}
//Get all blogs
router.get('/', getBlogs)
//Get single blog
router.get('/:id', getBlog)
//post a new workout
router.post('/addblog', createBlog)


export default router