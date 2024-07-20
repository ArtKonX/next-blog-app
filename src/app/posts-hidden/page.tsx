import PostsHiddenContainer from "@/components/postsHidden/PostsHidden";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'HiddenPosts',
}

export default function HomePage() {

    return (
        <div>
            <PostsHiddenContainer />
        </div>
    );
};