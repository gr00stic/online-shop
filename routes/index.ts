import {Router} from 'express';
import productRouter from './product.router';
import userRouter from './user.router';

const router = Router();

router.use('/product', productRouter);
router.use('/user', userRouter);

export default router;