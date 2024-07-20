import React from 'react';
import CommentList from './commentList/CommentList';
import NoComments from './noComments/NoComments';
import { hasComments } from '@/utils/commentHelpers';
import styles from './CommentsContainer.module.scss';

import ICommentData from '@/interfaces/comment.interface'

const CommentsContainer: React.FC<ICommentData> = ({ comments }) => {

  return (
    <div className={styles['container-comments']}>
      <h2 className={styles['comments-block-title']}>
        Блок комментариев пользователей:
      </h2>
      {hasComments(comments) ? (
        <CommentList comments={comments} />
      ) : (
        <NoComments />
      )}
    </div>
  );
};

export default CommentsContainer