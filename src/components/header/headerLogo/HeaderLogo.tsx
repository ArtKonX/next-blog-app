'use client';

import Link from 'next/link';

import styles from './HeaderLogo.module.scss';
import { dmSerifDisplay400 } from '../../../styles/fonts-project/fonts';

export default function HeaderLogo() {

    return (
        <div className={styles['header-logo']}>
            <Link className={styles['header-logo__link']} href="/home" replace>
                <span className={`${dmSerifDisplay400.className} ${styles['logo-text']}`}>Matrix<span className={styles['logo-text_color']}>Blog</span></span>
            </Link>
        </div>
    )
}