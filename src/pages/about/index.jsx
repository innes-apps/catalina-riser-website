/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { rofane } from '@/utils/font-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, distinctio fuga
              ratione laboriosam consectetur inventore, ipsum nulla repudiandae aut expedita nam.
              Omnis totam nam ex mollitia alias ratione asperiores aliquid. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Nihil, distinctio fuga ratione laboriosam
              consectetur inventore, ipsum nulla repudiandae aut expedita nam. Omnis totam nam ex
              mollitia alias ratione asperiores aliquid.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde qui hic facere vero
              voluptatum quo, eius expedita cumque incidunt, molestias suscipit obcaecati.
              Praesentium, veritatis ipsum odio nobis cumque sunt deserunt voluptatum, quidem,
              voluptatibus quod quibusd am quos. Quisquam, quod. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Unde qui hic facere vero voluptatum quo, eius expedita
              cumque incidunt, molestias suscipit obcaecati. Praesentium, veritatis ipsum odio nobis
              cumque sunt deserunt voluptatum, quidem, voluptatibus quod quibusd am quos. Quisquam,
              quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui hic facere
              vero voluptatum quo, eius expedita cumque incidunt, molestias suscipit obcaecati.
              Praesentium, veritatis ipsum odio nobis cumque sunt deserunt voluptatum, quidem,
              voluptatibus quod quibusd am quos. Quisquam, quod.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquam? Distinctio
              nesciunt consequatur sapiente inventore aliquam accusamus, exercitationem, iure veniam
              facilis illo sequi ipsa obcaecati officia itaque placeat aliquid repellendus.
            </p>
            <Link href="/contact" className="linkAsButton">
              Get in touch <FontAwesomeIcon icon={faAngleRight} size="sm" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
