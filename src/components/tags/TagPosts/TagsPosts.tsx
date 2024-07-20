import { getTagPost } from "@/utils/apiUtils/apiRequests";
import { useEffect, useState } from "react";

import PostContainer from "@/components/post/PostContainer";

import styles from '@/components/tags/TagPosts/TagsPosts.module.scss'


type Params = {
    slug: string
}

const TagsPosts = ({ params }: { params: Params }) => {

    const [tagPosts, setTagPosts] = useState<string[]>();

    useEffect(() => {
        const fetchPosts = async () => setTagPosts(await getTagPost(params))
        if (fetchPosts) fetchPosts()
    }, []);

    if (!tagPosts) return <h1>Loading...</h1>;

    return (
        <div className={styles['container-posts']}>
            <div className={`${styles['posts']}`}>
                <h1 className={styles['posts__title']}>Все посты пользователей тега: {params.slug}</h1>
                <ul className={styles['posts__block']}>
                    {tagPosts?.length >= 1 ? (
                        tagPosts.map((post: any) => (
                            <li key={post._id}><PostContainer post={post} /></li>
                        ))
                    ) : (
                        <li className={styles['posts__no-post']}>{'Нет постов по этому тегу('}</li>
                    )}
                </ul>

            </div>
        </div>
    )
}

export default TagsPosts