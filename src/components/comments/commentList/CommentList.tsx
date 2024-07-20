import React from 'react';
import OnlyCommentContainer from '@/components/comment/OnlyCommentContainer';
import styles from './CommentList.module.scss';

import ICommentData from '@/interfaces/comment.interface'


const CommentList: React.FC<ICommentData> = ({ comments }) => {

    return (
        <div className={styles['comments']}>
            <ul>
                {comments.map((comment: any) => (
                    <li className={styles['comments__elem']} key={comment._id}>
                        <OnlyCommentContainer content={comment.content} name={comment.name} createdAt={comment.createdAt}
                        />
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default CommentList