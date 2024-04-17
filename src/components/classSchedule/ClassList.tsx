import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faLocationDot, faComment } from '@fortawesome/free-solid-svg-icons';

import styles from './ClassList.module.css';

export interface ClassListItemProps {
  _id: string;
  title: string;
  time: string;
  location: string;
  signUpLink?: string;
  note?: string;
}

export interface ClassListProps {
  classes: ClassListItemProps[];
}

const ClassList: React.FC<ClassListProps> = ({ classes }) => {
  if (classes) {
    return (
      <ul className={styles.classList}>
        {classes.map((item) => (
          <li key={item._id} className={styles.classListItem}>
            <p>
              {item.title} - {item.time}
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} size="sm" /> {item.location}
            </p>
            {item.signUpLink && (
              <Link href={item.signUpLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} size="sm" /> Sign Up
              </Link>
            )}
            {item.note && (
              <p>
                <FontAwesomeIcon icon={faComment} size="sm" /> {item.note}
              </p>
            )}
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default ClassList;
