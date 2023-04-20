import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
    user: {type: Object, ref: 'User'},
    status: {type: String, default: 'Registered'},
    items: [{type: Object}],
    total: {type: Number}
},
{
    timestamps: true
});

export default model("Order", OrderSchema);