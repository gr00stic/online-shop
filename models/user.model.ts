import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required"]
    },

    email: {
        type: String,
        required: [true, "User email is required"]
    },

    password: {
        type: String,
        required: [true, "User password is required"]
    }
});

export default mongoose.model("User", userSchema);