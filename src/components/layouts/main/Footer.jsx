import { lato } from '@/utils/font-loader';

import styles from './MainLayout.module.css';

// temporary dev data
const testimonials = [
  {
    name: 'Sarah M.',
    text: "Katie's yoga classes have transformed my practice. Her gentle guidance and attention to alignment helped me develop strength and flexibility I never thought possible.",
  },
  {
    name: 'James T.',
    text: 'As someone new to yoga, I was nervous at first, but Katie creates such a welcoming and supportive environment. Her classes are the highlight of my week.',
  },
  {
    name: 'Michelle L.',
    text: 'Katie has an amazing ability to adapt her teaching to all skill levels. Her peaceful energy and clear instructions make every class a joy.',
  },
  {
    name: 'Robert K.',
    text: "I've been practicing yoga for years, and Katie is by far the best instructor I've had. Her knowledge of anatomy and mindful approach have deepened my practice.",
  },
  {
    name: 'Emily W.',
    text: "The meditation techniques Katie incorporates into her classes have helped me manage stress and find balance in my daily life. She's truly gifted.",
  },
  {
    name: 'David P.',
    text: "Katie's classes are the perfect blend of challenge and relaxation. Her positive energy is contagious, and I always leave feeling renewed and centered.",
  },
];

export default function Footer() {
  const today = new Date(Date.now());
  const year = today.getFullYear();

  return (
    <footer className={`${styles.footer} ${lato.className}`}>
      <div className={styles.testimonialsWrapper}></div>
      <p>&copy; {year} Catalina Riser</p>
    </footer>
  );
}
