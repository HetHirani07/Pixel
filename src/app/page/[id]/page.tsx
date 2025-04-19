'use client';
import styles from '@/app/page.module.css';
import Link from 'next/link';
import {PageProps as Pages} from '@/app/pageProps'

export default function page(context: any){
  const id  = context?.params?.id;
  const page = Pages.find((i)=> i.id.toString() === id);
  if(!page) return <h1 className={styles.heading}>Page not found</h1>;

  return (
    <div>
      <h1 className={styles.heading}>{page.name}</h1>
      <img src={`/api/pagePixel/${page.id}`} width={1} height={1} style={{display: 'none',}} />
      <Link href='/'><div className={styles.btn}>
        <span className={styles.btnTxt}>Back</span>
      </div></Link>
    </div>
  );
};