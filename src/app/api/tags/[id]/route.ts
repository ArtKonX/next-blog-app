import Post from "@/models/Post";
import connect from "@/db/mongpDb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

type Params = {
    id: string
}

export const GET = async (request: NextRequest, { params }: { params: Params }) => {

    const { id } = params;

    await connect();

    try {

        const postsHidden = await Post.find({ tags: id, isHidden: false });

        if (!postsHidden) {
            return new Response("Posts hidden not found", { status: 404 });
        }

        return new NextResponse(JSON.stringify(postsHidden), { status: 200 })

    } catch (err: any) {
        return new NextResponse(err, { status: 500 });
    }
};