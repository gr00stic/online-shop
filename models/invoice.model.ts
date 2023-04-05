import { Schema, model } from 'mongoose';

const InvoiceSchema = new Schema({
    fileName: {type: String, required: [true, "Category name is required"]},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

export default model("Invoice", InvoiceSchema);