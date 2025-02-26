import styles from './Testimonial.module.css';

export default function Testimonial(props: { name: string; quote: string }) {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialContent}>
        <div>
          <h3>{props.name}</h3>
          <p>{props.quote}</p>
        </div>
      </div>
    </div>
  );
}
