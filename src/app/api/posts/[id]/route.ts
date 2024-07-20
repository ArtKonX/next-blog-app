import Post from "@/models/Post";
import connect from "@/db/mongpDb";
import { NextResponse } from "next/server";
import { Types } from "mongoose";
import { NextRequest } from "next/server";

type Params = {
    id: string
}

export const PUT = async (request: NextRequest, { params }: {params: Params}) => {
    const { id } = params;
    const {title, content} = await request.json();

    await connect();

    try {
        const post = await Post.findByIdAndUpdate(
            new Types.ObjectId(id),
            {title, content},
            { new: true, runValidators: true }
        );

        if (!post) {
            return new NextResponse("Post not found", { status: 404 });
        }

        await post.save();

        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err: any) {
        return new NextResponse(err, { status: 500 });
    }
};

export const GET = async (request: NextRequest, { params }: {params: Params}) => {
    const { id } = params;

    await connect();

    try {
        const post = await Post.findById(new Types.ObjectId(id));

        if (!post) {
            return new NextResponse("Post not found", { status: 404 });
        }

        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err: any) {
        return new NextResponse(err, { status: 500 });
    }
};