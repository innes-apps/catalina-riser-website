import React from 'react';
import Head from 'next/head';
import { rofane } from '@/utils/font-loader';

import styles from './ClassSchedule.module.css';

export default function ClassSchedule(scheduleData) {
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

        <table className={styles.scheduleContainer}>
          <tbody>
            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Monday</span>
              </td>
              <td className={styles.classListCell}>
                <ul className={styles.classList}>
                  <li className={styles.classListItem}>
                    <p>Slow Flow 10:00 AM</p>
                    <p>Studio A</p>
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Tuesday</span>
              </td>
              <td className={styles.classListCell}>
                <ul className={styles.classList}>
                  <li className={styles.classListItem}>
                    <p>Slow Flow 10:00 AM</p>
                    <p>Studio A</p>
                  </li>
                  <li className={styles.classListItem}>
                    <p>Slow Flow 10:00 AM</p>
                    <p>Studio A</p>
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Wednesday</span>
              </td>
              <td className={styles.classListCell}>
                <ul className={styles.classList}>
                  <li className={styles.classListItem}>
                    <p>Slow Flow 10:00 AM</p>
                    <p>Studio A</p>
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Thursday</span>
              </td>
              <td className={styles.classListCell}>
                <ul className={styles.classList}>
                  <li className={styles.classListItem}>
                    <p>Slow Flow 10:00 AM</p>
                    <p>
                      Studio A <span> - $10 drop in</span>
                    </p>
                  </li>
                  <li className={styles.classListItem}>
                    <p>Slow Flow 10:00 AM</p>
                    <p>Studio A</p>
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Friday</span>
              </td>
              <td className={styles.classListCell}>
                <ul className={styles.classList}>
                  <li className={styles.classListItem}>
                    <p>Slow Flow 10:00 AM</p>
                    <p>Studio A</p>
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Saturday</span>
              </td>
              <td className={styles.classListCell}>
                <ul className={styles.classList}>
                  <li className={styles.classListItem}>
                    <p>Slow Flow 10:00 AM</p>
                    <p>Studio A</p>
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Sunday</span>
              </td>
              <td className={styles.classListCell}>
                <ul className={styles.classList}>
                  <li className={styles.classListItem}>
                    <p>Slow Flow 10:00 AM</p>
                    <p>Studio A</p>
                  </li>
                  <li className={styles.classListItem}>
                    <p>Slow Flow 10:00 AM</p>
                    <p>Studio A</p>
                    <p>Contact me for sign up details</p>
                  </li>
                  <li className={styles.classListItem}>
                    <p>Slow Flow 10:00 AM</p>
                    <p>
                      Studio A <span> - Contact me for sign up details</span>
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
