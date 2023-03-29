import Product from "../models/product.model";
import ApiError from "../models/error.model";

class ProductService {
    async isProductExists(productId: string){
        const product = await Product.findById(productId);

        if(!product){
            throw ApiError.notFound('Product is not found');
        }

        return product;
    }

}

export default new ProductService();