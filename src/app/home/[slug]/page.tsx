'use client'

import { getPostsData } from "@/utils/apiUtils/apiRequests";

import IPost from "@/interfaces/post.interface";

import TagsPosts from "@/components/tags/TagPosts/TagsPosts";

export async function getStaticPaths() {
    const response = await getPostsData();
    const posts = response.data;

    const paths = posts.map((post: IPost) => ({
        params: { slug: post.tags.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

type Params = {
    slug: string
}

export default function PostTagPage({ params }: {
    params: Params
}) {

    return (
        <div>
            <TagsPosts params={params} />
        </div>
    )

}