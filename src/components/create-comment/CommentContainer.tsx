import styles from './CreateComment.module.scss'
import CreateComment from './createComment/CreateComment'
import { signOut, useSession } from "next-auth/react";
import { FormEventHandler } from 'react';

export default function CommentContainer({ setBody, onSubmit }: {  setBody: (value: string) => void; onSubmit: FormEventHandler<HTMLFormElement> }) {

    const { data: session } = useSession();
    return (
        <div className={styles['container-comment']}>
            {session?.user?.email ? (
                <CreateComment
                    onSubmit={onSubmit}
                    setBody={setBody}
                />
            ) : (
                <div className={styles['no-form']}>Войдите в аккаунт, чтобы писать комментарии!</div>
            )}
        </div>
    );
}