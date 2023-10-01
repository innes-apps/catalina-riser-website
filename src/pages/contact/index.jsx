/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import contactImage1 from '../../../public/img/contact_1.jpg';

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
          <div className={styles.imageWrapperMain}>
            <Image
              src={contactImage1}
              alt="Katie Innes smiling in pigeon pose"
              width={505}
              height={520}
              placeholder="blur"
            />
          </div>
          <div className={styles.imageWrapperSmall}>
            <Image
              src={contactImage1}
              alt="Katie Innes smiling in pigeon pose"
              width={305}
              height={320}
              placeholder="blur"
            />
          </div>
          <div className={styles.sectionContent}>
            <h2>Why work with me?</h2>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quis? Illo sint ipsam
              adipisci error, autem, quos cum placeat modi impedit totam voluptas unde qui mollitia
              deleniti? Amet, reprehenderit molestias. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Non, quis? Illo sint ipsam adipisci error, autem, quos cum placeat
              modi impedit totam voluptas unde qui mollitia deleniti? Amet, reprehenderit molestias.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quis? Illo sint ipsam
              adipisci error, autem, quos cum placeat modi impedit totam voluptas unde qui mollitia
              deleniti? Amet, reprehenderit molestias.
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
