/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Catalina Riser Yoga</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Katie Innes</h1>
          <p className={styles.description}>The sun slowly rises casting light on the mountain,</p>
          <p className={styles.description}>Bringing with it a sense of peace and calm.</p>
        </div>
      </div>

      <div className={styles.homeContent}>
        <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <img src="https://picsum.photos/300" />
          </div>
          <div className={styles.sectionContent}>
            <h2>About</h2>
            <p className={styles.copy}>
              Katie Innes is a certified yoga instructor based in Tucson, Arizona. She has been
              practicing yoga for over 10 years and has been teaching for 3 years. She is a 200 hour
              RYT and has completed her 300 hour training. She is also a certified prenatal yoga
              instructor. She teaches a variety of styles including vinyasa, hatha, yin, and
              restorative. She is passionate about making yoga accessible to everyone and creating a
              safe space for her students to explore their practice.
            </p>
            <Link href="/about" className="linkAsButton">
              Learn more &gt;
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <img src="https://picsum.photos/300" />
          </div>
          <div className={styles.sectionContent}>
            <h2>Offerings</h2>
            <p className={styles.copy}>
              Katie offers a variety of classes including vinyasa, hatha, yin, and restorative. She
              also offers private sessions and workshops. She is passionate about making yoga
              accessible to everyone and creating a safe space for her students to explore their
              practice.
            </p>
            <Link href="/about" className="linkAsButton">
              Get in touch &gt;
            </Link>
          </div>
        </section>

        <section className={styles.socialMedia}>
          <p>Follow Me!</p>
          <Link href="https://www.instagram.com/catalinariser/" className="linkAsButton">
            @catalinariseryoga &gt;
          </Link>
        </section>
      </div>
    </>
  );
}
