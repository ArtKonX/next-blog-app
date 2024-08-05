'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './EditorContainer.module.scss'
import PostForm from './editorForm/EditorForm';

import { useEffect, useState } from 'react';

import IPost from '@/interfaces/post.interface';

import { getPost } from '@/utils/apiUtils/apiRequests';
import { useSession } from 'next-auth/react';

type Params = {
    slug: string;
};

export default function EditorPostContainer({ params }: { params: Params }) {
    const router = useRouter();

    const [post, setPost] = useState<IPost | null>(null);

    const { data: session } = useSession();

    useEffect(() => {
        const fetchPost = async () => {
            const fetchedPost = await getPost(params);
            setPost(fetchedPost);
        };

        fetchPost();
    }, []);

    if (!session?.user) return (<h1 className={styles['title-editor']}>Вы не вошли в аккаунт</h1>)

    if (!post) return <div>Loading...</div>;

    return (
        <div className={styles['container-editor']}>
            <h1 className={styles['title-editor']}>Редактировать Ваш пост:</h1>
            <PostForm post={post} onSubmit={() => router.push(`/post/${params.slug}`)} />
        </div>
    );
}