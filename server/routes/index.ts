import {Router} from 'express';
import productRouter from './product.router';
import userRouter from './user.router';
import cartRouter from './cart.router';
import orderRouter from './order.router';

const router = Router();

router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/cart', cartRouter);
router.use('/order', orderRouter);

export default router;