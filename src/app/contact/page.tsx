import Link from 'next/link';
import { rofane } from '@/utils/font-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import contactImage1 from '../../../public/img/contact_1.jpg';

import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <div className={styles.aboutContent}>
        <h1 className={`pageHeader ${rofane.className}`}>Get in touch</h1>
        <section className={styles.section}>
          <div className={styles.imageWrapperMain}>
            <Image
              src={contactImage1}
              alt="Katie smiling in pigeon pose"
              width={505}
              height={520}
              placeholder="blur"
              priority
            />
          </div>
          <div className={styles.imageWrapperSmall}>
            <Image
              src={contactImage1}
              alt="Katie smiling in pigeon pose"
              width={305}
              height={320}
              placeholder="blur"
            />
          </div>
          <div className={styles.sectionContent}>
            <h2 className={rofane.className}>Why work with me?</h2>
            <p className={styles.copy}>
              My philosophy is deeply rooted in inclusivity, body positivity, and mindfulness,
              ensuring that yoga is accessible to everyone, including children, while prioritizing
              safety and personal well-being. I go beyond physical postures to incorporate
              mindfulness practices, helping you not only develop physical strength but also enhance
              your mental and emotional awareness. This holistic approach fosters a sense of self
              that extends far beyond the mat.
            </p>
            <p className={styles.copy}>
              I firmly believe in yoga&apos;s potential to empower people of all ages to lead
              healthier and more mindful lives. Whether you join my group classes or opt for private
              sessions, I craft dynamic sequences that engage and challenge you within your
              abilities. I offer flexibility in my teaching, including the option for custom classes
              to suit your individual or group needs. I will strive to provide a transformative
              journey that nurtures your physical and mental strength while leaving a lasting impact
              on your overall well-being. Stay connected with me on Instagram for updates and class
              announcements or leave me a message if you&apos;d like to work together!
            </p>
          </div>
        </section>
        <section className={styles.ctaSection}>
          <div className={styles.cta}>
            <p className={styles.copy}>Follow me for the latest announcements!</p>
            <Link
              href="https://www.instagram.com/catalinariser/"
              className="linkAsButton"
              target="_blank"
            >
              @catalinariseryoga <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
            </Link>
          </div>
          <div className={styles.cta}>
            <p className={styles.copy}>Interested in working together?</p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSf0SoWO-ulX3OgWTo1bkS1z0h2LvUjx6Sh4dL9uQk7_OFTGqQ/viewform?usp=sf_link"
              className="linkAsButton"
              target="_blank"
            >
              Leave me a message! <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
