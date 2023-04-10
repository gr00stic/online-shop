import { Schema, model } from 'mongoose';

const BrandSchema = new Schema({
    name: {type: String, required: [true, "Brand name is required"]},
    info: {type: String, default: ''}
});

export default model("Brand", BrandSchema);