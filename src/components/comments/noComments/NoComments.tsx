import React from 'react';
import styles from './NoComments.module.scss';

export default function NoComments() {

    return (
        <div className={styles['no-comment']}>
            <ul>
                <li className={styles['no-comment__text']}>
                    Комментариев нет( Ваш может быть первым...
                </li>
            </ul>
        </div>
    );
};