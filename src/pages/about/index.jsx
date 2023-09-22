/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { rofane } from '@/utils/font-loader';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>Catalina Riser Yoga</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.aboutContent}>
        <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <img src="https://picsum.photos/300?random=1&grayscale" />
          </div>
          <div className={styles.sectionContent}>
            <h2 className={rofane.className}>Personal Story pt. 1</h2>
            <p className={styles.copy}>
              Katie Innes is a certified yoga instructor based in Tucson, Arizona. She has been
              practicing yoga for over 10 years and has been teaching for 3 years. She is a 200 hour
              RYT and has completed her 300 hour training. She is also a certified prenatal yoga
              instructor. She teaches a variety of styles including vinyasa, hatha, yin, and
              restorative. She is passionate about making yoga accessible to everyone and creating a
              safe space for her students to explore their practice.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <img src="https://picsum.photos/300?random=2" />
          </div>
          <div className={styles.sectionContent}>
            <h2 className={rofane.className}>Personal Story pt. 2</h2>
            <p className={styles.copy}>
              Katie Innes is a certified yoga instructor based in Tucson, Arizona. She has been
              practicing yoga for over 10 years and has been teaching for 3 years. She is a 200 hour
              RYT and has completed her 300 hour training. She is also a certified prenatal yoga
              instructor. She teaches a variety of styles including vinyasa, hatha, yin, and
              restorative. She is passionate about making yoga accessible to everyone and creating a
              safe space for her students to explore their practice.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <img src="https://picsum.photos/300?random=3&blur=3" />
          </div>
          <div className={styles.sectionContent}>
            <h2 className={rofane.className}>Philosophy and Offerings</h2>
            <p className={styles.copy}>
              Katie Innes is a certified yoga instructor based in Tucson, Arizona. She has been
              practicing yoga for over 10 years and has been teaching for 3 years. She is a 200 hour
              RYT and has completed her 300 hour training. She is also a certified prenatal yoga
              instructor. She teaches a variety of styles including vinyasa, hatha, yin, and
              restorative. She is passionate about making yoga accessible to everyone and creating a
              safe space for her students to explore their practice.
            </p>
            <Link href="/contact" className="linkAsButton">
              Get in touch &gt;
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
