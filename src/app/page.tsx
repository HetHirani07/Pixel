'use client';
import styles from './page.module.css';
import Link from 'next/link';

export default function home(){
  return (
    <div>
      <h1 className={styles.heading}>Page 1</h1>
      <img src='/api/home' width={1} height={1} style={{display: 'none',}} />
      <Link href='/page/2'><div className={styles.btn}>
        <span className={styles.btnTxt}>Page 2</span>
      </div></Link>
      <Link href='/page/3'><div className={styles.btn}>
        <span className={styles.btnTxt}>Page 3</span>
      </div></Link>
    </div>
  );
};