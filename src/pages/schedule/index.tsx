import React from 'react';
import Head from 'next/head';
import { rofane } from '@/utils/font-loader';

import styles from '@/styles/Schedule.module.css';

export default function Schedule() {
  return (
    <>
      <Head>
        <title>Catalina Riser Yoga - Schedule</title>
        <meta name="description" content="Catalina Riser Yoga class schedule" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.scheduleContent}>
        <h1 className={`pageHeader ${rofane.className}`}>Class Schedule</h1>
        <div className={styles.scheduleContainer}>
          <div className={styles.scheduleRow}>
            <div className={styles.scheduleDayGrid}>
              <div>
                <span>Monday</span>
              </div>
              <ul>
                <li>
                  <p>Slow Flow 10:00 AM</p>
                  <p>Studio A</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.scheduleRow}>
            <div className={styles.scheduleDayGrid}>
              <div>
                <span>Tuesday</span>
              </div>
              <ul>
                <li>
                  <p>Slow Flow 10:00 AM</p>
                  <p>Studio A</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.scheduleRow}>
            <div className={styles.scheduleDayGrid}>
              <div>
                <span>Wednesday</span>
              </div>
              <ul>
                <li>
                  <p>Slow Flow 10:00 AM</p>
                  <p>Studio A</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.scheduleRow}>
            <div className={styles.scheduleDayGrid}>
              <div>
                <span>Thursday</span>
              </div>
              <ul>
                <li>
                  <p>Slow Flow 10:00 AM</p>
                  <p>Studio A</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.scheduleRow}>
            <div className={styles.scheduleDayGrid}>
              <div>
                <span>Friday</span>
              </div>
              <ul>
                <li>
                  <p>Slow Flow 10:00 AM</p>
                  <p>Studio A</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.scheduleRow}>
            <div className={styles.scheduleDayGrid}>
              <div>
                <span>Saturday</span>
              </div>
              <ul>
                <li>
                  <p>Slow Flow 10:00 AM</p>
                  <p>Studio A</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.scheduleRow}>
            <div className={styles.scheduleDayGrid}>
              <div>
                <span>Sunday</span>
              </div>
              <ul>
                <li>
                  <p>Slow Flow 10:00 AM</p>
                  <p>Studio A</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
