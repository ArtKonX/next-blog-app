import styles from './CreateComment.module.scss';
import CommentTextarea from '../commentTextarea/CommentTextarea';
import CommentForm from '../CommentForm/CommentForm';
import { FormEventHandler } from 'react';

export default function CreateComment({ setBody, onSubmit }: {  setBody: (value: string) => void; onSubmit: FormEventHandler<HTMLFormElement> }) {
  return (
    <div className={styles['write-comment']}>
      <CommentTextarea setBody={setBody} />
      <CommentForm onSubmit={onSubmit} />
    </div>
  );
};