import Comment from "@/models/Comment";
import connect from "@/db/mongpDb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

export const POST = async (request: NextRequest) => {
    const { post, email, name, content } = await request.json();

    await connect();

    const db = mongoose.connection.db;

    const collections = await db.listCollections().toArray();
    const collectionName = 'comments';
    const collectionExists = collections.some((collection) => collection.name === collectionName);


    if (!collectionExists) {
        await db.createCollection(collectionName);
        console.log(`Collection '${collectionName}' created.`);
    }

    try {

        const newComment = new Comment({
            post,
            email,
            name,
            content,
        });

        await newComment.save();

        return new NextResponse("Post added successfully", { status: 200 });
    } catch (err: any) {
        return new NextResponse(err, { status: 500 });
    }
};