import styles from './CommentContent.module.scss';

type Content = {
    content: string;
};

const CommentContent: React.FC<Content> = ({content}) => {
    return (
        <div>
             <p className={styles['comment-content']}>{content}</p>
        </div>
    );
};

export default CommentContent;