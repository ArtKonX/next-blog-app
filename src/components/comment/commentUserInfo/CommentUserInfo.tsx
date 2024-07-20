import styles from './CommentUserInfo.module.scss';
import { signOut, useSession } from "next-auth/react";


const CommentUserInfo = ({name}: {name: string}) => {
    const { data: session } = useSession();

    return (
        <div>
            <p className={styles['username']}>{(name != session?.user?.name) ? `Имя: ${name}` : 'Имя: Вы'}</p>
        </div>
    );
};

export default CommentUserInfo;