import styles from './OnlyCommentContainer.module.scss';
import CommentContent from './commentContent/CommentContent';
import CommentUserInfo from './commentUserInfo/CommentUserInfo';
import CommentTimestamp from './commentTimestamp/CommentTimestamp';

type CommentData = {
  content: string;
  name: string;
  createdAt: Date
};

const OneCommentContainer: React.FC<CommentData> = ({ content, name, createdAt }) => {
  return (
    <div className={styles['container-only-comment']}>
      <CommentContent content={content} />
      <CommentUserInfo name={name} />
      <CommentTimestamp createdAt={createdAt} />
    </div>
  );
};

export default OneCommentContainer