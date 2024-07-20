'use client'

import styles from './LoginInput.module.scss';

const LoginInput = ({ id, label, placeholder, type }: { id: string, label: string, placeholder: string, type: string }) => {

    return (
        <div className={styles['input-block']}>
            <label className={styles['input-block__label']} htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                className={styles['input-block__input']}
                placeholder={placeholder}
            />
        </div>
    )
}

export default LoginInput;
