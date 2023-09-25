/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/Contact.module.css';

export default function Contact() {
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
            <img src="https://picsum.photos/800/300?random=1&grayscale&blur" />
          </div>
          <div className={styles.sectionContent}>
            <h2>Why work with me?</h2>
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
        <section className={styles.ctaSection}>
          <div className={styles.cta}>
            <p className={styles.copy}>Follow me for the latest announcements!</p>
            <Link href="https://www.instagram.com/catalinariser/" className="linkAsButton">
              @catalinariseryoga <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
            </Link>
          </div>
          <div className={styles.cta}>
            <p className={styles.copy}>Interested in working together?</p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScTVfIdHLEsVNTfGQkUvQTDQmtNtzcMgMAj4qxMlSFZAeabHw/viewform?usp=sf_link"
              className="linkAsButton"
            >
              Get in touch! <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
