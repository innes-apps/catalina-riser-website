/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { rofane } from '@/utils/font-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import aboutImage1 from '../../../public/img/about_1.jpg';
import aboutImage2 from '../../../public/img/about_2.jpg';
import aboutImage3 from '../../../public/img/about_3.jpg';

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
            <Image
              src={aboutImage1}
              alt="Katie posing in the morning light"
              width={300}
              height={462}
              placeholder="blur"
            />
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
            <Image
              src={aboutImage2}
              alt="Katie in crow pose"
              width={300}
              height={462}
              placeholder="blur"
            />
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
            <Image
              src={aboutImage3}
              alt="Katie meditating in the morning sunlight"
              width={300}
              height={462}
              placeholder="blur"
            />
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
