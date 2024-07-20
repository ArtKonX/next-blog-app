'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './EditorContainer.module.scss'
import PostForm from './postForm/PostForm';

import { useEffect, useState } from 'react';

import IPost from '@/interfaces/post.interface';

import { getPost } from '@/utils/apiUtils/apiRequests';

type Params = {
    slug: string;
};

export default function EditorContainer({ params }: { params: Params }) {
    const router = useRouter();

    const [post, setPost] = useState<IPost | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            const fetchedPost = await getPost(params);
            setPost(fetchedPost);
        };

        fetchPost();
    }, []);

    if (!post) return <div>Loading...</div>;


    return (
        <div className={styles['container-editor']}>
            <h1 className={styles['title-editor']}>Редактировать Ваш пост:</h1>
            <PostForm post={post} onSubmit={() => router.push(`/post/${params.slug}`)} />
        </div>
    );
}