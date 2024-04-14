import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

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
              {item.title} {item.time}
            </p>
            <p>{item.location}</p>
            {item.signUpLink && (
              <Link href={item.signUpLink} target="_blank" rel="noopener noreferrer">
                Sign Up <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
              </Link>
            )}
            {item.note && <p>{item.note}</p>}
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default ClassList;
