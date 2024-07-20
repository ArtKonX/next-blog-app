'use client';

import React, { useState, useEffect } from 'react';
import PostContainer from '@/components/post/PostContainer';
import styles from './PostsHidden.module.scss';
import { dmSerifDisplay400 } from '@/styles/fonts-project/fonts';

import { getPostsData } from '@/utils/apiUtils/apiRequests';

import { getSubs } from '@/utils/apiUtils/apiRequests';
import { signOut, useSession } from "next-auth/react";

const PostsHiddenContainer = () => {

    const [posts, setPosts] = useState<string[]>();
    const [subscription, setSubscription] = useState<{ subscriptions: string[] }>()

    const { data: session } = useSession();

    useEffect(() => {
        const fetchPosts = async () => setPosts(await getPostsData())
        if (fetchPosts) fetchPosts()
    }, []);

    useEffect(() => {
        const fetchPosts = async () => setSubscription(await getSubs())
        if (fetchPosts) fetchPosts()
    }, []);

    const postsHidden = posts?.filter((post: any) => ((post.isHidden) && (subscription?.subscriptions.includes(post.name) || (post.name == (session?.user?.name)))))

    if (!posts || !subscription || !session) return <div>Loading...</div>;

    return (
        <div className={styles['container-hidden-posts']}>
            <div className={`${dmSerifDisplay400.className} ${styles['hidden-posts']}`}>
                <h1 className={styles['hidden-posts__title']}>Все скрытые посты пользователей:</h1>

                <ul className={styles['hidden-posts__block']}>
                    {
                        postsHidden?.length !== 0 ?

                        postsHidden?.map((post: any) => (<li key={post._id}><PostContainer post={post} /></li>))

                        : <li className={styles['no-posts-hidden']}>Подпишитесь и получите срытые посты этого пользователя;)</li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default PostsHiddenContainer;