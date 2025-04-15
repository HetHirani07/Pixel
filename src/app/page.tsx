'use client';
import styles from './page.module.css';

export default function home(){
  return (
    <div>
      <h1 className={styles.heading}>Hello world!</h1>
      <img src='/api/pixel' width={1} height={1} style={{display: 'none',}} />
    </div>
  );
};