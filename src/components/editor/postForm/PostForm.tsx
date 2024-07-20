'use client';

import React, { useState } from 'react';
import { dmSerifDisplay400, roboto } from '@/styles/fonts-project/fonts';
import styles from './PostForm.module.scss';

import autoResizeTextarea from '@/utils/autoTextareaUtils/autoResizeTextarea'
import { putPost } from '@/utils/apiUtils/apiRequests';

import IPost from '@/interfaces/post.interface';
import { FormEventHandler } from 'react';

const PostForm = ({ post, onSubmit }: { post: IPost, onSubmit: FormEventHandler<HTMLFormElement | null> }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [id, setId] = useState(post._id)

    return (
        <div>
            <form className={`${dmSerifDisplay400.className} ${styles.form}`} onSubmit={(e) => { [putPost({ id, title, content }), e.preventDefault(), onSubmit(e)] }}>
                <div className={styles['form__input-block']}>
                    <label className={styles['label-title']}>Заголовок:</label>
                    <input
                        className={`${roboto.className} ${styles.input}`}
                        type="text"
                        value={title}
                        onChange={(e) => [setTitle(e.target.value)]}
                    />
                </div>
                <div className={styles['form__textarea-block']}>
                    <label className={styles['label-title']}>Весь контент:</label>
                    <textarea
                        className={`${roboto.className} ${styles.textarea}`}
                        rows={1}
                        contentEditable="true"
                        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            autoResizeTextarea(e);
                            setContent(e.target.value);
                        }}
                        value={content}
                    ></textarea>
                </div>
                <button className={styles['btn-submit']} type="submit">
                    Обновить пост
                </button>
            </form>
        </div>

    );
};

export default PostForm;