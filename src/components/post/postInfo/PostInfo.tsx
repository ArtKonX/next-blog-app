import styles from './PostInfo.module.scss'
import Link from 'next/link';
import getDate from '@/utils/date';

import IPostSingle from '@/interfaces/post.interface';

import { signOut, useSession } from "next-auth/react";

const PostInfo = ({ post }: {post: IPostSingle}) => {


    const { data: session } = useSession();

    return (
        <div>
            <Link href={`/post/${post._id}`}>
                <h2 className={styles['post-title']}>{post.title}</h2>
            </Link>
            <p className={styles['post-content']}>{post.content}</p>
            <span className={styles['post-username']}>{(post.email != session?.user?.email) ? `Автор - ${post.name}` : 'Автор - Вы'}</span>
            <span className={styles['post-time']}>{getDate(post.createdAt)}</span>
            <span className={styles['post-tag']}>Тег: {post.tags}</span>
            <span className={styles['post-isHidden']}>Это - {post.isHidden ? 'Скрытый' : 'Публичный'} пост</span>
        </div>
    );
};

export default PostInfo;