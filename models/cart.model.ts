import { Schema, model } from 'mongoose';

const CartSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    items: [{type: Schema.Types.ObjectId, res: 'Products'}]
});

export default model("Cart", CartSchema);