import { lato } from '@/utils/font-loader';
import Testimonial from '@/components/testimonial/Testimonial';

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
];

export default function Footer() {
  const today = new Date(Date.now());
  const year = today.getFullYear();

  return (
    <footer className={`${styles.footer} ${lato.className}`}>
      <div className={styles.testimonialsWrapper}>
        <h2>Testimonials</h2>
        <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} name={testimonial.name} quote={testimonial.text} />
          ))}
        </div>
      </div>
      <p>&copy; {year} Catalina Riser</p>
    </footer>
  );
}
