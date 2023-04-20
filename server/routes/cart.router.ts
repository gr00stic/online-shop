import Router from 'express';
import authMiddleware from '../middleware/auth-middleware';
import cartController from '../controllers/cart.controller';

const cartRouter = Router();

cartRouter.get('/get-cart', authMiddleware, cartController.getCart);

cartRouter.post('/add-item/:itemId', authMiddleware, cartController.addItem);

cartRouter.put('/remove-item/:itemId', authMiddleware, cartController.removeItem);

cartRouter.delete('/clear-cart', authMiddleware, cartController.clearCart);


export default cartRouter;