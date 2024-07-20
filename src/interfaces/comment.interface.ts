import mongoose from "mongoose";

export default interface IComment {
    _id?: string;
    post?: mongoose.Schema.Types.ObjectId;
    email?: string;
    name?: string;
    content?: string;
    createdAt?: Date;
}

export default interface ICommentData {
    comments: IComment[]
}