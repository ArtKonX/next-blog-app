import styles from './CommentForm.module.scss';
import { FormEventHandler } from 'react';

export default function CommentForm({ onSubmit }: { onSubmit: FormEventHandler<HTMLFormElement> }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <button className={styles['btn-submit']} type="submit">
                    Отправить коммент:
                </button>
            </form>
        </div>

    );
};