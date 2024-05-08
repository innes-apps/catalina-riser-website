import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faLocationDot, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

import styles from './EventCard.module.css';

// ToDo: Get dynamic events working
/* export default function EventCard(
  title: string,
  date: string,
  time: string,
  location: string,
  signUpLink: string
) {
  return (
    <div className={styles.eventCard}>
      <h3>{title}</h3>
      <div className={styles.eventCardContent}>
        <div className={styles.eventInfo}>
          <h4>Date</h4>
          <p>{date}</p>
        </div>
        <div className={styles.eventInfo}>
          <h4>Time</h4>
          <p>{time}</p>
        </div>
        <div className={styles.eventInfo}>
          <h4>Location</h4>
          <p>{location}</p>
        </div>
        <Link href={signUpLink} target="_blank" rel="noopener noreferrer" className="linkAsButton">
          <FontAwesomeIcon icon={faLink} size="sm" /> Sign Up!
        </Link>
      </div>
    </div>
  );
} */

// Temporary static event card until get dynamic events working
export default function EventCard() {
  return (
    <div className={styles.eventCard}>
      <h3>Peace in the Pines - Yoga Practice</h3>
      <div className={styles.eventCardContent}>
        <div className={styles.eventInfo}>
          <h4>Date</h4>
          <p>June 1, 2024</p>
        </div>
        <div className={styles.eventInfo}>
          <h4>Time</h4>
          <p>1:00 PM - 4:00 PM</p>
        </div>
        <div className={styles.eventInfo}>
          <h4>Location</h4>
          <p>Middle Bear Picnic Area, Mount Lemmon</p>
        </div>
        <Link
          href="https://www.eventbrite.com/e/peace-in-the-pines-yoga-among-the-pines-on-mount-lemmon-tickets-899116330147"
          target="_blank"
          rel="noopener noreferrer"
          className="linkAsButton"
        >
          <FontAwesomeIcon icon={faLink} size="sm" /> Sign Up!
        </Link>
      </div>
    </div>
  );
}
