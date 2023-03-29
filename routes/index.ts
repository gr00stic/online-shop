import {Router} from 'express';
import productRouter from './product.router';

const router = Router();

router.use('/product', productRouter);

export default router;