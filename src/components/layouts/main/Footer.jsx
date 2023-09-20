import { useEffect, useState } from 'react';
import { lato } from '@/utils/font-loader';

import styles from './MainLayout.module.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const today = new Date(Date.now());
    const year = today.getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <footer className={`${styles.footer} ${lato.className}`}>
      <p>&copy; {currentYear} Catalina Riser</p>
    </footer>
  );
}
