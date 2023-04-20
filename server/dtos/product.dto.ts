export default class ProductDto {
    "quantity": number;
    "description": string;
    "price": number;
    "rating": number;
    "tax-rate": number;

    constructor(model: any) {
        this.quantity = model.quantity;
        this.description = model.name;
        this.price = model.price;
        this["tax-rate"] = 20;
    }

}