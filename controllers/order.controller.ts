import { Request, Response, NextFunction } from "express";
import orderService from "../services/order.service";

class OrderController {
    async getAllOrders(req: Request, res: Response, next: NextFunction) {
        try {
            const orders = await orderService.getAllOrders();

            res.json(orders);
        } catch (e) {
            next(e);
        }
    }

    async getUserOrders(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user.id;

            const orders = await orderService.getUserOrders(userId);

            res.json(orders);
        } catch (e) {
            next(e);
        }
    }

    async getOneOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const orderId = req.params.orderId;
            const { id, role }: { id: string, role: string } = req.user;
            console.log(role);

            const order = await orderService.getOneOrder(id, role, orderId);

            res.json(order);
        } catch (e) {
            next(e);
        }
    }

    async saveOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user.id;

            const order = await orderService.saveOrder(userId);

            res.json(order);
        } catch (e) {
            next(e);
        }
    }

    async cancelOrder(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {
            next(e);
        }
    }
}

export default new OrderController();