'use client';

import React from 'react';
import { WriteAPostForm } from './writeAPostForm/WriteAPostForm'
import styles from './WriteAPostContainer.module.scss';
import { useSession } from 'next-auth/react';

export default function WriteAPostContainer() {

  const { data: session } = useSession();

  if (!session?.user) return (<h1 className={styles.title}>Вы не вошли в аккаунт</h1>)

  return (
    <div className={styles['container-write-post']}>
      <h1 className={styles.title}>Напишите Ваш пост:</h1>
      <WriteAPostForm />
    </div>
  );
}