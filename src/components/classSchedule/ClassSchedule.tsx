import React from 'react';
import { rofane } from '@/utils/font-loader';
import ClassList from './ClassList';

import styles from './ClassSchedule.module.css';

export default function ClassSchedule({ scheduleData }) {
  return (
    <>
      <div className={styles.scheduleContent}>
        <h2 className={`${rofane.className}`}>Class Schedule</h2>
        <table className={styles.scheduleContainer}>
          <tbody>
            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Monday</span>
              </td>
              <td className={styles.classListCell}>
                <ClassList classes={scheduleData.monday} />
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Tuesday</span>
              </td>
              <td className={styles.classListCell}>
                <ClassList classes={scheduleData.tuesday} />
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Wednesday</span>
              </td>
              <td className={styles.classListCell}>
                <ClassList classes={scheduleData.wednesday} />
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Thursday</span>
              </td>
              <td className={styles.classListCell}>
                <ClassList classes={scheduleData.thursday} />
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Friday</span>
              </td>
              <td className={styles.classListCell}>
                <ClassList classes={scheduleData.friday} />
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Saturday</span>
              </td>
              <td className={styles.classListCell}>
                <ClassList classes={scheduleData.saturday} />
              </td>
            </tr>

            <tr>
              <td className={styles.scheduleDayCell}>
                <span className={styles.scheduleDay}>Sunday</span>
              </td>
              <td className={styles.classListCell}>
                <ClassList classes={scheduleData.sunday} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
