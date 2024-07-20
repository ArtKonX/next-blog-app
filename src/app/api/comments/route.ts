import Comment from "@/models/Comment";
import connect from "@/db/mongpDb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    const { post, email, name, content } = await request.json();

    await connect();

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