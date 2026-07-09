import styles from "../app/page.module.css";
import { Activity } from "lucide-react";

export default function Fitness() {
  const programs = [
    { name: "Zumba", img: "/event_zumba.png" },
    { name: "Aerobics", img: "/event_weekend.png" },
    { name: "Dance Fitness", img: "/kids_perf_3.png" },
    { name: "Ladies Special Batch", img: "/event_garba.png" },
    { name: "Weight-loss Workout", img: "/event_summer.png" }
  ];

  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="fitness">
      <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>Fitness Programs</h2>
      <div className={styles.galleryGrid}>
        {programs.map((prog, idx) => (
          <div key={idx} className={styles.card} style={{ borderColor: "var(--color-maroon)", padding: 0, overflow: "hidden" }}>
            <div className={styles.galleryImageWrapper} style={{ width: "100%" }}>
              <img src={prog.img} alt={prog.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
              <h3 style={{ color: "var(--color-white)", fontSize: "1.2rem", margin: 0 }}>{prog.name}</h3>
              <p style={{ color: "var(--color-text-dim)", fontSize: "0.85rem", margin: 0 }}>
                Stay fit, burn calories, and have fun.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
