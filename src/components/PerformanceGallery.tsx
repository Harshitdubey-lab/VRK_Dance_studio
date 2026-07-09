import styles from "../app/page.module.css";

export default function PerformanceGallery() {
  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="performances">
      <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>Student Performances</h2>
      <p style={{ textAlign: "center", color: "var(--color-text-dim)", marginBottom: "3rem" }}>
        Glimpses of practice, stage shows, events, competitions, and workshops.
      </p>
      <div className={styles.galleryGrid}>
        {/* Placeholders for performance photos/videos */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className={styles.galleryImageWrapper} style={{ 
            background: "var(--color-true-white)", 
            borderRadius: "0", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
            overflow: "hidden"
          }}>
            <img src={`/kids_perf_${item}.png`} alt={`Student Performance ${item}`} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
          </div>
        ))}
      </div>
    </section>
  );
}
