import styles from "../app/page.module.css";
import { Star, StarHalf } from "lucide-react";

export default function Reviews() {
  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="reviews">
      <div className={styles.reviewContainer}>
        <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>What Parents & Students Say</h2>
        <div className={styles.stars}>
          <Star fill="currentColor" size={32} />
          <Star fill="currentColor" size={32} />
          <Star fill="currentColor" size={32} />
          <Star fill="currentColor" size={32} />
          <StarHalf fill="currentColor" size={32} />
        </div>
        <div className={styles.reviewScore}>4.6</div>
        <p style={{ color: "var(--color-text-dim)" }}>141 ratings on Justdial</p>
        <a 
          href="https://www.justdial.com/Hoshangabad/Vrk-Dance-Studio-Near-Yadav-Kirana-Ke-Samne-Vrk-Dance-Studio-Sohagpur/9999P7574-7574-180714170538-M9U7_BZDET" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.btnSecondary}
          style={{ display: "inline-flex", marginTop: "2rem" }}
        >
          Read Reviews on Justdial
        </a>
      </div>
    </section>
  );
}
