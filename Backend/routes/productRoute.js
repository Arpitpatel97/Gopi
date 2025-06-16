import express from 'express';
import { addProduct, listProduct, removeProduct, singleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js'; // Assuming you have a multer configuration for file uploads
const productRouter = express.Router();

productRouter.post('/add',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
productRouter.get('/list', listProduct);
productRouter.post('/remove', removeProduct);
productRouter.post('/single', singleProduct);

export default productRouter;