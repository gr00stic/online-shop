import ProductDto from "../dtos/product.dto";
import cartModel from "../models/cart.model";
import ApiError from "../models/error.model";
import productModel from "../models/product.model";
import productService from "./product.service";


class CartService {
    async getCart(userId: string) {
        const cart = await cartModel.findOne({ user: userId });

        const items: Array<any> = [];

        if (!cart) return [];

        for (const item of cart.items) {
            const isItemExists = await productService.isProductExists(String(item));
            if (isItemExists) items.push(isItemExists);
            // items.push(new ProductDto(isItemExists));
        }

        return items;
    }

    async addItem(userId: string, itemId: string) {
        const isCartExists = await cartModel.findOne({ user: userId });
        const isItemExists = await productModel.findById(itemId);
        let cart;

        if (!isItemExists) throw ApiError.badRequest('Item does not exist');
        if (!isCartExists) cart = await cartModel.create({ user: userId });

        cart = await cartModel.findOneAndUpdate({ user: userId }, { $push: { items: isItemExists } }, { new: true });

        return cart;
    }

    async removeItem(userId: string, itemId: string) {
        const isCartExists = await cartModel.findOne({ user: userId });
        const isItemExists = await productModel.findById(itemId);

        if (!isCartExists) throw ApiError.badRequest('Cart is empty');
        if (!isItemExists) throw ApiError.badRequest('Item does not exist');

        const cart = await cartModel.findOneAndUpdate({ user: userId }, { $pull: { items: itemId } });

        return cart;
    }

    async clearCart(userId: string) {
        const cart = await cartModel.findOne({ user: userId });
        if (!cart) throw ApiError.badRequest('Cart is empty');

        await cartModel.deleteOne({ user: userId })

        return cart;
    }
}

export default new CartService();