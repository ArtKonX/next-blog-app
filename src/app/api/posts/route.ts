import Post from "@/models/Post";
import connect from "@/db/mongpDb";
import { Types } from "mongoose";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    const { email, name, title, content, tags, isHidden } = await request.json();

    await connect();

    try {

        const newPost = new Post({
            email,
            name,
            title,
            content,
            tags,
            isHidden
        });

        await newPost.save();

        return new NextResponse("Post added successfully", { status: 200 });
    } catch (err: any) {
        return new NextResponse(err, { status: 500 });
    }
};

export const GET = async (request: NextRequest) => {

    await connect();

    try {

        const posts = await Post.find();

        if (!posts) {
            return new NextResponse("Posts not found", { status: 404 });
        }

        return new NextResponse(JSON.stringify(posts), { status: 200 });


    } catch (err: any) {
        return new NextResponse(err.message, { status: 500 });
    }
};

export const DELETE = async (request: NextRequest) => {
    const { _id } = await request.json();

    await connect();

    try {
        const post = await Post.findByIdAndDelete(new Types.ObjectId(_id));

        if (!post) {
            return new NextResponse("Post not found", { status: 404 });
        }

        return new NextResponse("Post deleted successfully", { status: 200 });
    } catch (err: any) {
        return new NextResponse(err, { status: 500 });
    }
};
