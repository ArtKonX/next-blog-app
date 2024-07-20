'use client';

import React from 'react';
import { WriteAPostForm } from './writeAPostForm/WriteAPostForm'
import styles from './WriteAPostContainer.module.scss';
export default function WriteAPostContainer() {
  return (
    <div className={styles['container-post']}>
      <h1 className={styles.title}>Напишите Ваш пост:</h1>
      <WriteAPostForm />
    </div>
  );
}