'use client';

import styles from './SubscriptionContainer.module.scss';

import { getSubs } from '@/utils/apiUtils/apiRequests';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';

export default function SubscriptionsContainer() {

    const [dataSubscription, setDataSubscription] = useState<{ subscriptions: string[] }>()


    const { data: session } = useSession();

    useEffect(() => {
        const fetchPosts = async () => setDataSubscription(await getSubs())
        if (fetchPosts) fetchPosts()
    }, []);

    if (!session?.user) return (<h1 className={styles['title-subscriptions']}>Вы не вошли в аккаунт</h1>)

    if (!dataSubscription) return <div>Loading...</div>;

    return (
        <div className={styles['container-subscriptions']}>
            <h1 className={styles['title-subscriptions']}>Все Ваши подписки:</h1>
            <ul className={styles['subscriptions-block']}>
                    {dataSubscription.subscriptions.length > 0 ? (
                        dataSubscription.subscriptions.map((elem: string, index: number) => (
                            <li key={index} className={styles['subscriptions-block__elem']}>
                                {elem}
                            </li>
                        ))
                    ) : (
                        <li className={styles['subscriptions-block__elem']}>{'Нет подписок('}</li>
                    )}
            </ul>
        </div>
    );
}
