import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
    {
        post: { type: mongoose.Schema.Types.ObjectId, equired: true },
        email: {
            type: String,
        },
        name: {
            type: String,
        },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    }
);

export default mongoose.models.Comment || mongoose.model("Comment", commentSchema);