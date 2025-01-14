/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { rofane } from '@/utils/font-loader';

import styles from './MainLayout.module.css';

export default function Header() {
  return (
    <>
      <header className={`${styles.header} ${rofane.className}`}>
        <Link href="/">
          <Image
            src={'/img/Logo_Circle_transp.webp'}
            alt="Catalina Riser Yoga Logo"
            width={150}
            height={150}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.mainNav} aria-label="below logo nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <header className={`${styles.mobileHeader} ${rofane.className}`}>
        <div className={styles.mobileBanner}>
          <Link href="/">
            <Image
              src={'/img/Logo_Full.webp'}
              alt="Catalina Riser Yoga Logo"
              width={257}
              height={150}
              className={styles.logo}
              priority
            />
          </Link>
        </div>

        <nav className={styles.mobileNav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
}
