'use client';

import { useSession } from 'next-auth/react';
import MenuLink from './menuLink/MenuLink';
import useActiveLink from '@/hooks/useActiveLink'
import { dmSerifDisplay400 } from '@/styles/fonts-project/fonts';
import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
    const { data: session }: any = useSession();
    const isHomeActive = useActiveLink('/home');
    const isSubscriptionsActive = useActiveLink('/subscriptions');
    const isWritePostActive = useActiveLink('/write-a-post');
    const isAboutUsActive = useActiveLink('/about-us');

    const isPostsHidden = useActiveLink('/posts-hidden');

    return (
        <div>
            <nav className={styles.navigation}>
                <ul className={`${dmSerifDisplay400.className} ${styles.menu}`}>
                    <li>
                        <MenuLink href="/home" isActive={isHomeActive}>
                            Главная
                        </MenuLink>
                    </li>
                    {session && (
                        <li>
                            <MenuLink href="/subscriptions" isActive={isSubscriptionsActive}>
                                Подписки
                            </MenuLink>
                        </li>
                    )}
                    {session && (
                        <li>
                            <MenuLink href="/posts-hidden" isActive={isPostsHidden}>
                                Скрытые
                            </MenuLink>
                        </li>
                    )}
                    {session && (
                        <li>
                            <MenuLink href="/write-a-post" isActive={isWritePostActive}>
                                Написать пост
                            </MenuLink>
                        </li>
                    )}
                    <li>
                        <MenuLink href="/about-us" isActive={isAboutUsActive}>
                            О нас
                        </MenuLink>
                    </li>
                </ul>
            </nav>
        </div>

    );
}