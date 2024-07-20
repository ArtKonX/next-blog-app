'use client';

import React, { useState, useEffect } from 'react';
import PostContainer from '@/components/post/PostContainer';
import styles from '@/components/posts/PostsContainer.module.scss';
import { dmSerifDisplay400 } from '@/styles/fonts-project/fonts';

import { getPostsData } from '@/utils/apiUtils/apiRequests';

const PostsContainer = () => {

    const [posts, setPosts] = useState<string[]>();

    useEffect(() => {
        const fetchPosts = async () => setPosts(await getPostsData())
        if (fetchPosts) fetchPosts()
    }, []);

    if (!posts) return <div>Loading...</div>;

    return (
        <div className={styles['container-posts']}>
            <div className={`${dmSerifDisplay400.className} ${styles['posts']}`}>
                <h1 className={styles['posts__title']}>Все посты пользователей:</h1>

                <ul className={styles['posts__block']}>
                    {posts.length >= 1 ? (
                        posts.map((post: any) => (!(post.isHidden) ?
                            (<li key={post._id}><PostContainer post={post} /></li>) : ''
                        ))
                    ) : (
                        <li className={styles['posts__no-post']}>{'Нет постов('}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default PostsContainer;