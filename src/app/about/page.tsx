import type { Metadata } from 'next';
import Link from 'next/link';
import { rofane } from '@/utils/font-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import aboutImage1 from '../../../public/img/about_1.webp';
import aboutImage2 from '../../../public/img/about_2.webp';
import aboutImage3 from '../../../public/img/about_3.webp';

import styles from '@/styles/About.module.css';

export const metadata: Metadata = {
  title: 'Catalina Riser Yoga | About',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Catalina Riser Yoga | About',
    images: ['https://www.catalinariser.yoga/img/og_image.webp'],
  },
};

export default function About() {
  return (
    <>
      <div className={styles.aboutContent}>
        <h1 className={`pageHeader ${rofane.className}`}>Hello and Welcome</h1>
        <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <Image
              src={aboutImage1}
              alt="Katie posing in the morning light"
              width={300}
              height={462}
              placeholder="blur"
              priority
            />
          </div>
          <div className={styles.sectionContent}>
            <h2 className={rofane.className}>My Journey</h2>
            <p className={styles.copy}>
              My journey with yoga began in 2003 in high school. Since that first encounter, it has
              become a foundation and passion; but my yoga journey extends beyond the mat. Over the
              years I felt a strong calling to share the transformative power of yoga with others
              so, in 2022 I began pursuing my 200-RYT certificate. While working towards its
              completion, I started offering classes in a local park where I&apos;ve had the
              privilege of teaching a diverse group of individuals, including military veterans,
              from diverse backgrounds and skill levels. This experience reinforced my belief in the
              inclusivity of yoga. My mission is to provide a safe space where all beings can
              explore and expand their yoga practice, allowing the profound benefits of yoga to
              ripple into their everyday lives.
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
            <h2 className={rofane.className}>My Philosophy</h2>
            <p className={styles.copy}>
              My yoga philosophy is rooted in inclusivity, body positivity, and mindfulness.
              I&apos;m deeply committed to making yoga accessible to people of all age groups,
              including children, and providing guidance to safely move through each pose in a way
              that makes sense for their body. As a yoga instructor, I believe in going beyond the
              physical asanas, incorporating pranayama (breathwork) and mindfulness practices to
              nurture not only physical strength but also mental and emotional well-being. I believe
              that these elements, when applied consistently, lead to heightened body and mind
              awareness, fostering a holistic sense of self.
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
            <p className={styles.copy}>
              I hope to develop yoga classes that spark the interest of new and potential
              practitioners, encouraging them to make yoga a daily part of their lives. I firmly
              believe that yoga has the potential to empower individuals of all ages to lead
              healthier, more mindful lives. My offerings encompass a holistic approach to yoga,
              where every breath, every movement, and every moment on the mat contribute to personal
              growth and self-discovery. It is my privilege and passion to guide students on this
              transformative journey, nurturing their physical and mental strength while fostering
              mindfulness that extends far beyond the mat.
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
