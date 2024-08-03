'use client'

import TagsPosts from "@/components/tags/TagPosts/TagsPosts";

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