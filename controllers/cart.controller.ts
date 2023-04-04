import { Request, Response, NextFunction } from "express";
import cartService from "../services/cart.service";

class CartController {
    async getCart(req: Request, res: Response, next: NextFunction){
        try {
            const userId = req.user.id;

            const cart = await cartService.getCart(userId);

            res.json(cart);
        } catch (e) {
            next(e);
        }
    }

    async addItem(req: Request, res: Response, next: NextFunction){
        try {
            const userId = req.user.id;
            const itemId = req.params.itemId;

            const item = await cartService.addItem(userId, itemId);

            res.json(item);
        } catch (e) {
            next(e);
        }
    }

    async removeItem(req: Request, res: Response, next: NextFunction){
        try {
            const userId = req.user.id;
            const itemId = req.params.itemId;

            const item = await cartService.removeItem(userId, itemId);

            res.json(item);
        } catch (e) {
            next(e);
        }
    }

    async clearCart(req: Request, res: Response, next: NextFunction){
        try {
            const userId = req.user.id;

            const oldCart = await cartService.clearCart(userId);

            res.json(oldCart);
        } catch (e) {
            next(e);
        }
    }

}

export default new CartController();