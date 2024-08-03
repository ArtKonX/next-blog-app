'use client'

import React, { useState, useEffect, useRef } from 'react';
import { signOut, useSession } from "next-auth/react";

import styles from '@/components/post/PostContainer.module.scss'
import { dmSerifDisplay400 } from '@/styles/fonts-project/fonts';

import PostContainer from '@/components/post/PostContainer'

import CreateComment from '@/components/createComment/CreateComment';

import CommentsContainer from '@/components/comments/CommentsContainer'

import { getPostsData, addComment, getComment } from '@/utils/apiUtils/apiRequests';

import IPost from '@/interfaces/post.interface';

export async function getStaticPaths() {
    const response = await getPostsData();
    const posts = response.data;

    const paths = posts.map((post: IPost) => ({
        params: { slug: post._id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

type Params = {
    slug: string
}

export default function PostPage({ params }: {
    params: Params
}) {

    const [posts, setPosts] = useState<IPost[]>([]);
    const { data: session } = useSession();
    const [content, setBody] = useState('');
    const [comments, setComments] = useState([]);

    const postOnly = posts.find((post: IPost) => post._id.toString() === params.slug);

    useEffect(() => {
        const comment = async () => setComments(await getComment(params))
        if (comment) comment()
    }, []);

    useEffect(() => {
        const posts = async () => setPosts(await getPostsData())
        if (posts) posts()
    }, []);


    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!postOnly || !session?.user?.email || !session?.user?.name) {
            console.error('Required data is missing');
            return;
        }

        try {
            await addComment({ post: postOnly._id, email: session.user.email, name: session.user.name, content: content });
            setBody('');
            window.location.reload()
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    if (!postOnly) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${dmSerifDisplay400.className} ${styles.container}`}>
            <PostContainer post={postOnly} params={params} />
            <CreateComment onSubmit={onSubmit} setBody={setBody} />
            <CommentsContainer comments={comments} />
        </div>
    );
}