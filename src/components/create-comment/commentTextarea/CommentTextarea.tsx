import styles from './CommentTextarea.module.scss';

import autoResizeTextarea from '@/utils/autoTextareaUtils/autoResizeTextarea'

export default function CommentTextarea({ setBody }: {  setBody: (value: string) => void }) {
    return (
        <div className={styles['textarea-block']}>
            <label className={styles['textarea-block__title']}>Оставить комментарий:</label>
            <textarea
                className={styles['textarea-block__textarea']}
                rows={1}
                contentEditable="true"
                onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    autoResizeTextarea(e);
                    setBody(e.target.value);
                }}
            />
        </div>
    );
};