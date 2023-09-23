/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { lato, rofane } from '@/utils/font-loader';

import styles from './MainLayout.module.css';

export default function Header() {
  return (
    <>
      <header className={`${styles.header} ${rofane.className}`}>
        <nav className={styles.leftNav} aria-label="left of logo nav">
          <Link href="/about">About</Link>
        </nav>

        <Link href="/">
          <Image
            src={'/img/Logo_Circle_transp.png'}
            alt="Catalina Riser Yoga Logo"
            width={150}
            height={150}
            className={styles.logo}
          />
        </Link>

        <nav className={styles.rightNav} aria-label="right of logo nav">
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <header className={`${styles.mobileHeader} ${rofane.className}`}>
        <div className={styles.mobileBanner}>
          <Link href="/">
            <Image
              src={'/img/Logo_Full.png'}
              alt="Catalina Riser Yoga Logo"
              width={257}
              height={150}
              className={styles.logo}
            />
          </Link>
        </div>

        <nav className={styles.mobileNav}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
}
