'use client';

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import homeImgAbout from '../../public/img/home_1.jpg';
import homeImgOfferings from '../../public/img/home_2.jpg';
import ClassSchedule from '@/components/classSchedule/ClassSchedule';
import EventCard from '@/components/specialEvents/EventCard';

import styles from '@/styles/Home.module.css';
import { rofane } from '@/utils/font-loader';

export default function HomePage({ schedule, events }) {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} ${rofane.className}`}>Katie Innes</h1>
          <p className={styles.description}>Turn in the direction</p>
          <p className={styles.description}>of greater mindfulness and love.</p>
        </div>
      </div>

      <div className={styles.homeContent}>
        <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <Image
              src={homeImgAbout}
              alt="Katie posing against a railing"
              width={300}
              height={462}
              placeholder="blur"
            />
          </div>
          <div className={styles.sectionContent}>
            <h2 className={rofane.className}>Hi I&apos;m Katie!</h2>
            <p className={styles.copy}>
              I am a 200-RYT certified yoga instructor, with experience teaching in Hatha, Vinyasa,
              and Nidra styles. With over a decade of in-studio yoga practice, my passion lies in
              expanding yoga and mindfulness to all age levels, including children, with a strong
              focus on pose safety, body positivity, and inclusivity. My goal is to foster a safe
              and inclusive space where individuals can deepen their yoga practice and allow the
              transformative benefits of yoga to enrich their daily lives.
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
              alt="Katie in a yoga pose with mesquite trees in the background"
              width={300}
              height={462}
              placeholder="blur"
            />
          </div>
          <div className={styles.sectionContent}>
            <h2 className={rofane.className}>Offerings</h2>
            <p className={styles.copy}>
              I currently facilitate weekly outdoor classes for beginners and experienced yogis,
              prioritizing pose safety and accessibility for all levels. I strive to create dynamic
              sequences that engage and challenge clients within their skill sets. Follow me on
              Instagram for announcements and updates regarding these classes.
            </p>
            <p className={styles.copy}>
              I am available to teach private Hatha, Vinyasa, or Nidra classes to adults and
              children in one-on-one or group settings. I am also available for collaborations, and
              corporate events. Or I would be happy to work with you to create a custom class to
              suit your needs. Please get in touch for more information!
            </p>
            <Link href="/contact" className="linkAsButton">
              Get in touch <FontAwesomeIcon icon={faAngleRight} size="sm" />
            </Link>
          </div>
        </section>

        <section className={styles.eventSection} id="events">
          <h2 className={`${rofane.className}`}>Upcomming Events</h2>
          {events.length === 0 && (
            <div className={styles.eventSectionContent}>
              <p className={styles.eventsPlaceholder}>Check back soon!</p>
            </div>
          )}

          {events.length === 1 && (
            <div className={styles.eventSectionContent1CardRow}>
              {events.map((event) => (
                <EventCard
                  key={event._id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  signUpLink={event.signUpLink}
                />
              ))}
            </div>
          )}

          {events.length === 2 && (
            <div className={styles.eventSectionContent2CardRow}>
              {events.map((event) => (
                <EventCard
                  key={event._id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  signUpLink={event.signUpLink}
                />
              ))}
            </div>
          )}

          {events.length >= 3 && (
            <div className={styles.eventSectionContent3CardRow}>
              {events.map((event) => (
                <EventCard
                  key={event._id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  signUpLink={event.signUpLink}
                />
              ))}
            </div>
          )}
        </section>

        {schedule && (
          <section className={styles.section} id="schedule">
            <ClassSchedule scheduleData={schedule} />
          </section>
        )}

        <section className={styles.socialMedia}>
          <p>Follow Me!</p>
          <Link
            href="https://www.instagram.com/catalinariser/"
            className="linkAsButton"
            target="_blank"
          >
            @catalinariseryoga <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
          </Link>
        </section>
      </div>
    </>
  );
}
