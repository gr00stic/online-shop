import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: {type: String},
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
    lang: { type: String },
    role: { type: String, default: 'USER' },
});

export default model("User", UserSchema);