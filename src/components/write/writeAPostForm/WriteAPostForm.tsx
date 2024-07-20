'use client';

import React, { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { roboto, dmSerifDisplay400 } from '@/styles/fonts-project/fonts';
import styles from './WriteAPostForm.module.scss'
import axios from 'axios';

import SelectIsHidden from '../selectIsHidden/SelectIsHidden';

import SelectTags from '../selectTags/SelectTags';

import autoResizeTextarea from '@/utils/autoTextareaUtils/autoResizeTextarea'

export const WriteAPostForm = () => {
    const { data: session } = useSession();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [tags, setTags] = useState('');

    const [isHidden, setIsHidden] =  useState(false);
    const router = useRouter();

    const titleRef = useRef<HTMLInputElement | null>(null);
    const contentRef = useRef<HTMLTextAreaElement | null>(null);

    const addPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (titleRef.current) titleRef.current.value = '';
        if (contentRef.current) contentRef.current.value = '';
        router.replace("/home");

        try {

            const data = { email: session?.user?.email, name: session?.user?.name, title, content, tags: tags || 'programming', isHidden }

            const response = await axios.post('../api/posts', data);

            if (response.status === 200) {
                console.log('Post created');
                setTitle('');
                setContent('');
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div>
            <form className={`${dmSerifDisplay400.className} ${styles.form}`} onSubmit={addPost}>

                <SelectTags setTags={setTags} />

                <SelectIsHidden setIsHidden={setIsHidden} />

                <div className={styles['form__input-block']}>
                    <label className={styles['label-title']}>Заголовок:</label>
                    <input ref={titleRef} className={`${roboto.className} ${styles.input}`} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles['form__textarea-block']}>
                    <label className={styles['label-title']}>Весь контент:</label>
                    <textarea
                        ref={contentRef}
                        className={`${roboto.className} ${styles.textarea}`}
                        rows={1}
                        contentEditable="true"
                        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            autoResizeTextarea(e);
                            setContent(e.target.value)
                        }}
                    />
                </div>
                <button className={styles['form__btn-submit']} type="submit">
                    Создать пост
                </button>
            </form>
        </div>

    );
};