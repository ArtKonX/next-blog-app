import getDate from '@/utils/date'
import styles from './CommentTimestamp.module.scss'

type CreatedAtDate = {
    createdAt: Date;
};

const CommentTimestamp: React.FC<CreatedAtDate> = ({ createdAt }) => {
    return (
        <div>
            <p className={styles['comment-time']}>Дата - {getDate(createdAt)}</p>
        </div>
    );
};

export default CommentTimestamp