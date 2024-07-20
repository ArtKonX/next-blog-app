import PostInfo from '@/components/post/postInfo/PostInfo'
import PostActions from '@/components/post/postActions/PostActions';

import styles from '@/components/post/PostContainer.module.scss'

import IPostSingle from '@/interfaces/post.interface';

type Params = {
    slug: string;
};

const PostContainer = ({ post, params }: { post: IPostSingle, params?: Params }) => {

    return (
        <div className={styles['container-post']}>
            <PostInfo
                post={post}
            />
            <PostActions post={post} params={params} />
        </div>
    );
};

export default PostContainer;