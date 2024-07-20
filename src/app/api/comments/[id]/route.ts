import Comment from "@/models/Comment";
import connect from "@/db/mongpDb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

type Params = {
    id: string
}

export const GET = async (request: NextRequest, { params } : {params: Params}) => {
    const { id } = params;

    await connect();

    try {

        const comments = await Comment.find({ post: id });

        if (!comments) {
            return new NextResponse("Comments not found", { status: 404 });
        }

        return new NextResponse(JSON.stringify(comments), { status: 200 });

    } catch (err: any) {
        return new NextResponse(err, { status: 500 });
    }
};

export const DELETE = async (request: NextRequest, { params } : {params: Params}) => {
    const { id } = params;

    await connect();

    try {

        const comments = await Comment.deleteMany({post: id});

        if (!comments) {
            return new NextResponse("Comments not found", { status: 404 });
        }

        return new NextResponse("Comments deleted successfully", { status: 200 });
    } catch (err: any) {
        return new NextResponse(err.message, { status: 500 });
    }
};