import { Request, Response, NextFunction } from "express";
import ApiError from "../models/error.model";
import Product from "../models/product.model";
import ProductService from "../services/product.service";

class ProductController {

    async getProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const products = await Product.find();
            res.json({ "msg": "All products found: ", products });
        } catch (e) {
            next(e);
        }
    }

    async getProductById(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await ProductService.isProductExists(req.params.id);

            res.json({ "msg": "Product found by id: ", product });
        } catch (e) {
            next(e);
        }
    }

    async createProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, price }:{name: string, price: number} = req.body;

            if (!name || !price) {
                res.status(400);
                throw ApiError.notFound("All fields are required");
            }

            const product = await Product.create({ name: name, price: Number(price) });
            
            res.status(200).json({ "msg": "New product was created", product });
        } catch (e) {
            next(e);
        }
    }

    async updateProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                res.status(404);
                throw new Error(`Product with id: ${req.params.id} not found`);
            }

            const { name, price } = req.body;
            if (!name || !price) {
                res.status(400);
                throw new Error("All fields are required");
            }

            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { name, price }, { new: true });
            res.json({ "msg": `Update product with id: ${req.params.id}`, "updatedProduct": updatedProduct });
        } catch (e) {
            next(e);
        }
    }

    async deleteProduct(req: Request, res: Response, next: NextFunction) {
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.json({ "msg": `Product with id: ${req.params.id} was deleted` });
        } catch (e) {
            next(e);
        }
    }
}

export default new ProductController();