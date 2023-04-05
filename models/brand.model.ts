import { Schema, model } from 'mongoose';

const BrandSchema = new Schema({
    name: {type: String, required: [true, "Brand name is required"]},
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});

export default model("Brand", BrandSchema);