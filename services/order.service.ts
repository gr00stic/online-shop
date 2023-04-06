import InvoiceDto from "../dtos/invoice.dto";
import ProductDto from "../dtos/product.dto";
import cartModel from "../models/cart.model";
import ApiError from "../models/error.model";
import orderModel from "../models/order.model";
import cartService from "./cart.service";
import productService from "./product.service";
import easyinvoice from 'easyinvoice'
import fs from 'fs';

class OrderService {
    async getAllOrders() {
        const orders = await orderModel.find();

        return orders;
    }

    async getUserOrders(userId: string) {
        const orders = await orderModel.find({ user: userId });

        return orders;
    }

    async getOneOrder(userId: string, userRole: string, orderId: string) {
        const order = await orderModel.findOne({ user: userRole === 'ADMIN' ? undefined : userId, _id: orderId })

        return order;
    }

    async saveOrder(userId: string) {
        const items = await cartService.getCart(userId);
        console.log(items);
        
        const order = await orderModel.create({ user: userId, items: items });
        await cartService.clearCart(userId);

        // TODO: send generated invoice via email
        // const result = await easyinvoice.createInvoice(new InvoiceDto({items: order.items, orderId: order._id}));
        // await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
        
        return order;
    }
}

export default new OrderService();