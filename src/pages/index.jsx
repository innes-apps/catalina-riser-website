/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import * as Sentry from '@sentry/nextjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { client } from '@/utils/sanity/client';
import homeImgAbout from '../../public/img/home_1.jpg';
import homeImgOfferings from '../../public/img/home_2.jpg';
import ClassSchedule from '@/components/classSchedule/ClassSchedule';
import EventCard from '@/components/specialEvents/EventCard';

import styles from '@/styles/Home.module.css';
import { rofane } from '@/utils/font-loader';

export default function Home({ schedule, events }) {
  return (
    <>
      <Head>
        <title>Catalina Riser Yoga</title>
        <meta name="description" content="Katie Innes, Tucson AZ based yoga instructor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

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
          {events && (
            <div className={styles.eventSectionContent}>
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
          {!events && <p>Check back soon!</p>}
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

const convertTo24HourFormat = (timeString) => {
  const [time, timeModifier] = timeString.split(' ');
  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (timeModifier.toLowerCase() === 'pm') {
    // Add 12 hours if PM
    return `${parseInt(hours) + 12}:${minutes}`;
  } else if (hours.length === 1) {
    // Add leading zero if single digit in AM time
    return `0${hours}:${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
};

export async function getStaticProps() {
  try {
    // Get all classes
    const scheduleQuery = `*[_type == "classes"]{_id, title, day, time, location, note, signUpLink}`;
    const rawSchedule = await client.fetch(scheduleQuery);

    // Get all events sorted by date
    const eventQuery = `*[_type == "events"] | order(date desc) { _id, title, date, time, location, signUpLink }`;
    const events = await client.fetch(eventQuery);

    // Convert rawSchedule into an object with items grouped by day and sorted by time
    const schedule = rawSchedule
      .map((item) => ({ ...item, timeAs24Hr: convertTo24HourFormat(item.time) }))
      .sort(
        (a, b) =>
          new Date(`2099-01-01 ${a.timeAs24Hr}:00Z`) - new Date(`2099-01-01 ${b.timeAs24Hr}:00Z`)
      ) // We only need to sort by time, but we are casting it into a date object to make sure the sorting is correct without having to double sort by hour then minutes
      .reduce((accumulator, item) => {
        // Group items by day, set to lowercase for normal looking json key
        const day = item.day.toLowerCase();

        // If they day array doesn't exist, create it
        if (!accumulator[day]) {
          accumulator[day] = [];
        }
        // Add the item to the day array
        accumulator[day].push(item);
        return accumulator;
      }, {});

    return { props: { schedule, events }, revalidate: 60 };
  } catch (error) {
    Sentry.captureException(error);
    return { props: {} };
  }
}
