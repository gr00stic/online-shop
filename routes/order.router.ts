import { Router } from "express";
import orderController from "../controllers/order.controller";
import authMiddleware from "../middleware/auth-middleware";
import checkRoleMiddleware from "../middleware/checkRole-middleware";


const orderRouter = Router();

orderRouter.get('/get-order/:orderId', authMiddleware, orderController.getOneOrder);
orderRouter.get('/get-all-orders', authMiddleware, checkRoleMiddleware('ADMIN'), orderController.getAllOrders);
orderRouter.get('/get-user-orders', authMiddleware, orderController.getUserOrders);

orderRouter.post('/save-order', authMiddleware, orderController.saveOrder);

orderRouter.put('/cancel-order/:orderId', authMiddleware,  )

export default orderRouter;