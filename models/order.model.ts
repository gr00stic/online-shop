import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    status: {type: String, default: 'Registered'},
    items: [{type: Object}]
},
{
    timestamps: true
});

export default model("Order", OrderSchema);