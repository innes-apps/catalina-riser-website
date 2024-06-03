import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { rofane } from '@/utils/font-loader';
import * as Sentry from '@sentry/nextjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { client } from '@/utils/sanity/client';

import styles from '@/styles/Events.module.css';

export default function Events(props: { events: any[] }) {
  return (
    <>
      <Head>
        <title>Catalina Riser Yoga</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.eventContent}>
        <h1 className={`pageHeader ${rofane.className}`}>Upcoming Events!</h1>

        <section className={styles.section}>
          {props.events.map((event) => {
            const date = new Date(event.date);

            return (
              <div key={event._id} className={styles.event}>
                <h3>{event.title}</h3>
                <div className={styles.eventDetails}>
                  <div className={`${styles.eventInfo} ${styles.eventDate}`}>
                    <h4>Date</h4>
                    <p>
                      {/* See above for explaination of why we use UTC */}
                      {date.getUTCMonth() + 1}/{date.getUTCDate()}/{date.getUTCFullYear()}
                    </p>
                  </div>

                  <div className={`${styles.eventInfo} ${styles.eventTime}`}>
                    <h4>Time</h4>
                    <p>{event.time}</p>
                  </div>

                  <div className={`${styles.eventInfo} ${styles.eventLocation}`}>
                    <h4>Location</h4>
                    <p>{event.location}</p>
                  </div>

                  <div className={`${styles.eventInfo} ${styles.eventDescription}`}>
                    <h4>Description</h4>
                    <p>{event.description}</p>
                  </div>

                  <Link
                    href={event.signUpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`linkAsButton ${styles.eventSignUpLink}`}
                  >
                    <FontAwesomeIcon icon={faLink} size="sm" /> Sign Up!
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    // Get all events sorted by date
    const eventQuery = `*[_type == "events"] | order(date desc) { _id, title, description, date, time, location, signUpLink }`;
    const events = await client.fetch(eventQuery);

    // ToDo replace with real data before deploying
    return {
      props: {
        events: [
          {
            _id: 'event1',
            title: 'Yoga for Beginners',
            description:
              "Discover the gentle art of yoga, a practice that awakens body, mind, and spirit. In this class, you'll learn basic poses and breathing techniques to set the foundation for your yoga journey.",
            date: '2023-01-01',
            time: '12:00PM - 3:00PM',
            location: '123 Main St.',
            signUpLink: 'https://example.com/signup',
          },
          {
            _id: 'event2',
            title: 'Strength Yoga',
            description:
              "Build your strength and flexibility with this challenging class. You'll be pushed to your limits as you explore dynamic flow sequences that engage your muscles from head to toe.",
            date: '2023-01-08',
            time: '6:00PM - 9:00PM',
            location: '456 Elm St.',
            signUpLink: 'https://example.com/signup',
          },
          {
            _id: 'event3',
            title: 'Restorative Yoga',
            description:
              'Find peace and relaxation in this deeply nurturing practice. Let go of tension and let your body rejuvenate as you settle into gentle restorative poses that invigorate the spirit and calm the mind.',
            date: '2023-01-15',
            time: '10:00AM - 5:00PM',
            location: '789 Oak St.',
            signUpLink: 'https://example.com/signup',
          },
          {
            _id: 'event4',
            title: 'Yoga for Arthritis',
            description:
              'A gentle practice designed to alleviate joint pain. This class will guide you through sequences that target specific joints, providing a safe and effective way to reduce stress and tension.',
            date: '2023-01-22',
            time: '7:00PM - 9:00PM',
            location: '321 Maple St.',
            signUpLink: 'https://example.com/signup',
          },
          {
            _id: 'event5',
            title: 'Yin Yoga',
            description:
              "Experience a deep release of tension and stress with this slow-flowing practice. Through a series of gentle postures and breathing techniques, you'll find your body and mind rejuvenated and relaxed.",
            date: '2023-01-29',
            time: '9:00AM - 11:00AM',
            location: '567 Pine St.',
            signUpLink: 'https://example.com/signup',
          },
        ],
      },
      revalidate: 60,
    };
  } catch (error) {
    Sentry.captureException(error);
    return { props: {} };
  }
}
