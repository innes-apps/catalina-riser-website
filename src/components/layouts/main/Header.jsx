/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { lato } from '@/utils/font-loader';

import styles from './MainLayout.module.css';

export default function Header() {
  return (
    <header className={`${styles.header} ${lato.className}`}>
      <nav className={styles.leftNav} aria-label="left of logo nav">
        <Link href="/about">About</Link>
      </nav>

      <img src={'https://picsum.photos/150'} alt="logo" className={styles.logo} />

      <nav className={styles.rightNav} aria-label="right of logo nav">
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
