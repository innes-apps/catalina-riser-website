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
              <div key={event._id}>
                <h3>{event.title}</h3>
                <div className={styles.eventCardContent}>
                  <div className={styles.eventInfo}>
                    <h4>Date</h4>
                    <p>
                      {/* See above for explaination of why we use UTC */}
                      {date.getUTCMonth() + 1}/{date.getUTCDate()}/{date.getUTCFullYear()}
                    </p>
                  </div>
                  <div className={styles.eventInfo}>
                    <h4>Time</h4>
                    <p>{event.time}</p>
                  </div>
                  <div className={styles.eventInfo}>
                    <h4>Location</h4>
                    <p>{event.location}</p>
                  </div>
                  <Link
                    href={event.signUpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkAsButton"
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

    return { props: { events }, revalidate: 60 };
  } catch (error) {
    Sentry.captureException(error);
    return { props: {} };
  }
}
