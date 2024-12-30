import { lato } from '@/utils/font-loader';

import styles from './MainLayout.module.css';

export default function Footer() {
  const today = new Date(Date.now());
  const year = today.getFullYear();

  return (
    <footer className={`${styles.footer} ${lato.className}`}>
      <p>&copy; {year} Catalina Riser</p>
    </footer>
  );
}
