import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
    name: {type: String, required: [true, "Category name is required"]},
    info: {type: String, default: ''}
});

export default model("Category", CategorySchema);