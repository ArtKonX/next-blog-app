'use client';

import styles from './AboutUsContainer.module.scss'
import { dmSerifDisplay400 } from '@/styles/fonts-project/fonts';

const AboutUsContainer = () => {

    return (
        <div className={styles['about-us-container']}>
            <div className={styles['logo']}>
                <span className={`${dmSerifDisplay400.className} ${styles['logo-text']}`}>Matrix<span className={styles['logo-text_color']}>Blog</span></span>
            </div>
        </div>
    )
}

export default AboutUsContainer;