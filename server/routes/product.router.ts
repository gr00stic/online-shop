import express from 'express';
import ProductController from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.get('/products', ProductController.getProducts);
productRouter.get('/get/:id', ProductController.getProductById);

productRouter.post('/save', ProductController.createProduct);

productRouter.put('/update/:id', ProductController.updateProduct);

productRouter.delete('/delete/:id', ProductController.deleteProduct);



export default productRouter;