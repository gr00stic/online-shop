export default class ProductDto {
    "quantity": number;
    "description": string;
    "price": number;
    "tax-rate": number;

    constructor(model: any) {
        this.quantity = 1;
        this.description = model.name;
        this.price = model.price;
        this["tax-rate"] = 20;
    }

}