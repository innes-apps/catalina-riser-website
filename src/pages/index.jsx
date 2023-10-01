/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import homeImgAbout from '../../public/img/home_1.jpg';
import homeImgOfferings from '../../public/img/home_2.jpg';

import styles from '@/styles/Home.module.css';
import { rofane } from '@/utils/font-loader';

export default function Home() {
  return (
    <>
      <Head>
        <title>Catalina Riser Yoga</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} ${rofane.className}`}>Katie Innes</h1>
          <p className={styles.description}>The sun slowly rises casting light on the mountain,</p>
          <p className={styles.description}>Bringing with it a sense of peace and calm.</p>
        </div>
      </div>

      <div className={styles.homeContent}>
        <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <Image
              src={homeImgAbout}
              alt="Katie Innes posing against railing"
              width={300}
              height={462}
              placeholder="blur"
            />
          </div>
          <div className={styles.sectionContent}>
            <h2 className={rofane.className}>About</h2>
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
            <Link href="/about" className="linkAsButton">
              Learn more <FontAwesomeIcon icon={faAngleRight} size="sm" />
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <Image
              src={homeImgOfferings}
              alt="Katie Innes in a yoga pose with mesquite trees in the background"
              width={300}
              height={462}
              placeholder="blur"
            />
          </div>
          <div className={styles.sectionContent}>
            <h2 className={rofane.className}>Offerings</h2>
            <p className={styles.copy}>
              Katie offers a variety of classes including vinyasa, hatha, yin, and restorative. She
              also offers private sessions and workshops. She is passionate about making yoga
              accessible to everyone and creating a safe space for her students to explore their
              practice.
            </p>
            <Link href="/about" className="linkAsButton">
              Get in touch <FontAwesomeIcon icon={faAngleRight} size="sm" />
            </Link>
          </div>
        </section>

        <section className={styles.socialMedia}>
          <p>Follow Me!</p>
          <Link href="https://www.instagram.com/catalinariser/" className="linkAsButton">
            @catalinariseryoga <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
          </Link>
        </section>
      </div>
    </>
  );
}
