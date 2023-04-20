import { Schema, model } from 'mongoose';

const CartSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    items: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});

export default model("Cart", CartSchema);