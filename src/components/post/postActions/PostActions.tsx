'use client'

import styles from './PostActions.module.scss'
import Link from 'next/link';

import { addSubscription } from '@/utils/apiUtils/apiRequests';
import { useRouter } from 'next/navigation';

import { deletePost } from '@/utils/apiUtils/apiRequests'

import { deleteComments } from '@/utils/apiUtils/apiRequests';

import IPostSingle from '@/interfaces/post.interface';

import { getSubs } from '@/utils/apiUtils/apiRequests';

import { useEffect, useState } from 'react';

import { signOut, useSession } from "next-auth/react";


type Params = {
    slug: string
}

const PostActions = ({
    post, params
}: { post: IPostSingle, params?: Params }) => {


    const [subscriptions, setSubscriptions] = useState<{ subscriptions: string[] }>()

    const router = useRouter();

    const { data: session } = useSession();

    useEffect(() => {
        const subs = async () => setSubscriptions(await getSubs())
        if (subs) subs()
    }, []);

    if (!subscriptions || !session) return <></>;

    return (
        <div className={styles['post-actions']}>
            {post.email !== session?.user?.email && session?.user?.email ? (
                <div className={styles['post-actions__btn-subscription']}>
                    {!subscriptions?.subscriptions.includes(post.name) ? (
                        <button
                            className={styles['btn-subscription']}
                            onClick={() => {
                                addSubscription({
                                    email: session?.user?.email,
                                    subscription: post.name,
                                    subscribers: post.email
                                });
                            }}
                        >
                            Добавить подписку
                        </button>
                    ) : (
                        <button className={styles['btn-subscription_active']}>Вы подписаны</button>
                    )}
                </div>
            ) : (session && params) ? (
                <button
                    className={styles['btn-subscription']}
                    onClick={() => {
                        [deleteComments(params), deletePost(post._id), router.replace("/home")]
                    }}
                >
                    Удалить пост
                </button>
            ) : null}
            {(session?.user?.email === post.email && params) && (
                <Link
                    className={styles['post-actions__link-update']}
                    href={`/editor-post/${post._id}`}
                >
                    Редактировать пост
                </Link>
            )}
        </div>
    );
};

export default PostActions;