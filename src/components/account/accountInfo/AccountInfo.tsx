import { useEffect, useState } from 'react';
import styles from './AccountInfo.module.scss';
import { useSession } from "next-auth/react";

import { getSubs } from '@/utils/apiUtils/apiRequests';

export default function AccountInfo() {

    const { data: session } = useSession();

    const [subscription, setSubscription] = useState<{ subscribers: string[] }>()


    useEffect(() => {
        const subs = async () => setSubscription(await getSubs())
        if (subs) subs()
    }, []);

    return (
        <div className={styles['account-info']}>
            <h1 className={styles['account-info__title']}>Информация о Вашем аккаунте:</h1>
            <span className={styles['account-info__info-about-user']}>Ваше имя: {session?.user?.name}</span>
            <span className={styles['account-info__info-about-user']}>Ваша электронная почта: {session?.user?.email}</span>
            <span className={styles['account-info__info-about-user']}>У вас подписчиков -  {subscription?.subscribers?.length ? subscription?.subscribers?.length : 0}</span>
        </div>
    );
}