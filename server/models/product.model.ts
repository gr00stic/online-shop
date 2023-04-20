import mongoose, { Schema } from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"]
    },
    rating: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0
    },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand' }

},
{
    timestamps: true
});

export default mongoose.model("Product", productSchema);