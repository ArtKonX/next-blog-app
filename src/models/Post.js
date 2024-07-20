import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        email: {
            type: String,
        },

        name: {
            type: String,
        },

        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },

        tags: {
            type: String,
        },

        isHidden: {
            type: Boolean
        },

        createdAt: { type: Date, default: Date.now },

    }
);

export default mongoose.models.Post || mongoose.model("Post", userSchema);