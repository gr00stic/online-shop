import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
    name: {type: String, required: [true, "Category name is required"]},
    brands: [{type: Schema.Types.ObjectId, ref: 'Brand'}]
});

export default model("Category", CategorySchema);