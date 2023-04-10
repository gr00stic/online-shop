import { Request, Response, NextFunction } from "express";
import ApiError from "../models/error.model";
import Product from "../models/product.model";
import Category from "../models/category.model";
import Brand from "../models/brand.model";
import ProductService from "../services/product.service";

class ProductController {

    async getProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const page = parseInt(req.query.page as string) -1 || 0;
            const limit = parseInt(req.query.limit as string) || 100;
            const search = req.query.search || "";
            let sort = req.query.sort || "rating";
            let categories = req.query.categories || "All";
            let brands = req.query.brands || "All"; 

            const categoriesFromDb = (await Category.aggregate([{$project: {_id: 1}}])).map(category => category = category._id);
            const brandsFromDb = (await Brand.aggregate([{$project: {_id: 1}}])).map(brand => brand = brand._id);
            
            categories === "All" ? (categories = [...categoriesFromDb]) : (categories = (req.query.categories as string).split(","))
            brands === "All" ? (brands = [...brandsFromDb]) : (brands = (req.query.brands as string).split(","))
            
            req.query.sort ? (sort = (req.query.sort as string).split(",")) : (sort = [sort as string]);
            const sortBy: any = {};
            sort[1] ? sortBy[sort[0]] = sort[1] : sortBy[sort[0]] = "desc";

            let products = await Product.find({ name: {$regex: search, $options: "i"}})
            .populate([
                {path: 'category', select: 'name', model: Category},
                {path: 'brand', select: 'name', model: Brand}])
            .where('category').in([...categories])
            .where('brand').in([...brands])
            .sort(sortBy)
            .limit(limit)
            .skip(page * limit)
 
            
            res.json({
                page,
                limit,
                categories,
                search,
                sort,
                products
            });
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