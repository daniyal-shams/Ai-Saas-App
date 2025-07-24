import express from 'express';
import { auth } from '../middlewares/auth.js';
import { generateArticle, generateBlogTitle, generateImage, removeImageBg, removeImageOb, resumeReview } from '../controllers/aiController.js';
import { upload } from '../config/multer.js'

const aiRouter = express.Router();

aiRouter.post('/generate-article', auth, generateArticle);
aiRouter.post('/generate-blog-title', auth, generateBlogTitle);
aiRouter.post('/generate-image', auth, generateImage);
aiRouter.post('/remove-image-bg', upload.single('image') ,auth, removeImageBg);
aiRouter.post('/remove-image-ob', upload.single('image'), auth, removeImageOb);
aiRouter.post('/resume-review', upload.single('resume'), auth, resumeReview);



export default aiRouter;