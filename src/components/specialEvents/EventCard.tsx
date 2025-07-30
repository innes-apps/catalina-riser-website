import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faLocationDot, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

import styles from './EventCard.module.css';

export default function EventCard(props: {
  title: string;
  date: string;
  time: string;
  location: string;
  signUpLink: string;
}) {
  const date = new Date(props.date);
  /**
   * Because this date does not contain time information,
   * it is parsed as midnight UTC.
   * This means that we need to explicitly pull the UTC date parts
   * or they might be off by one day due to timezone differences between UTC and the user's local timezone.
   */

  return (
    <div className={styles.eventCard}>
      <div className={styles.eventCardContent}>
        <div>
          <h3>{props.title}</h3>
          <div className={styles.eventInfo}>
            <h4>Date</h4>
            <p>
              {/* See above for explaination of why we use UTC */}
              {date.getUTCMonth() + 1}/{date.getUTCDate()}/{date.getUTCFullYear()}
            </p>
          </div>
          <div className={styles.eventInfo}>
            <h4>Time</h4>
            <p>{props.time}</p>
          </div>
          <div className={styles.eventInfo}>
            <h4>Location</h4>
            <p>{props.location}</p>
          </div>
        </div>

        {props.signUpLink && (
          <div className={styles.ctaWrapper}>
            <Link
              href={props.signUpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="linkAsButton"
            >
              <FontAwesomeIcon icon={faLink} size="sm" /> Sign Up!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
