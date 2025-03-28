import { lato } from '@/utils/font-loader';
import { client } from '@/utils/sanity/client';
import Testimonial from '@/components/testimonial/Testimonial';

import styles from './MainLayout.module.css';

async function getTestimonials(): Promise<Array<{ name: string; testimonial: string }>> {
  const query = `*[_type == "testimonials"] { name, testimonial }`;
  const testimonials = await client.fetch(
    query,
    {},
    {
      next: { revalidate: 600 },
    }
  );

  return testimonials;
}

export default async function Footer() {
  const today = new Date(Date.now());
  const year = today.getFullYear();
  const testimonials = await getTestimonials();

  return (
    <footer className={`${styles.footer} ${lato.className}`}>
      {testimonials.length > 0 && (
        <div className={styles.testimonialsWrapper}>
          <h2>Testimonials</h2>
          <div className={styles.testimonials}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} name={testimonial.name} quote={testimonial.testimonial} />
            ))}
          </div>
        </div>
      )}
      <p>&copy; {year} Catalina Riser</p>
    </footer>
  );
}
