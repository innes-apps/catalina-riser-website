import Header from './Header';
import Footer from './Footer';
import { lato } from '@/utils/font-loader';

import styles from './MainLayout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${lato.className}`}>{children}</main>
      <Footer />
    </>
  );
}
