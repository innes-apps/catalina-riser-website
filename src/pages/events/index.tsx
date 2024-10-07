import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { rofane } from '@/utils/font-loader';
import * as Sentry from '@sentry/nextjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { client } from '@/utils/sanity/client';
import { urlFor } from '@/utils/sanity/image-helper';

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

        {props.events.length === 0 && (
          <p className={styles.noEvents}>Check back soon for new events.</p>
        )}

        {props.events.length > 0 && (
          <section className={styles.section}>
            {props.events.map((event) => {
              const date = new Date(event.date);
              /**
               * Because this date does not contain time information,
               * it is parsed as midnight UTC.
               * This means that we need to explicitly pull the UTC date parts
               * or they might be off by one day due to timezone differences between UTC and the user's local timezone.
               */

              return (
                <div key={event._id} className={styles.event}>
                  <h3>{event.title}</h3>
                  <div
                    className={
                      event.featureImage ? styles.eventDetailsWithImage : styles.eventDetails
                    }
                  >
                    {event.featureImage && (
                      <Image
                        className={styles.eventImage}
                        src={urlFor(event.featureImage).width(200).url()}
                        alt={event.title}
                        width={200}
                        height={200}
                      />
                    )}
                    <div className={`${styles.eventDate}`}>
                      <h4>Date</h4>
                      <p>
                        {/* See above for explaination of why we use UTC */}
                        {date.getUTCMonth() + 1}/{date.getUTCDate()}/{date.getUTCFullYear()}
                      </p>
                    </div>

                    <div className={`${styles.eventTime}`}>
                      <h4>Time</h4>
                      <p>{event.time}</p>
                    </div>

                    <div className={`${styles.eventLocation}`}>
                      <h4>Location</h4>
                      <p>{event.location}</p>
                    </div>

                    <div className={`${styles.eventDescription}`}>
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
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    // Get all events sorted by date
    const eventQuery = `*[_type == "events"] | order(date asc) { _id, title, description, date, time, location, signUpLink, featureImage }`;
    const events = await client.fetch(eventQuery);

    return {
      props: {
        events,
      },
      revalidate: 60,
    };
  } catch (error) {
    Sentry.captureException(error);
    return { props: {} };
  }
}
