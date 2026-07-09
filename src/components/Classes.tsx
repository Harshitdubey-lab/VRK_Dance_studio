import styles from "../app/page.module.css";
import { Activity, Music, PersonStanding, Flame, HeartPulse } from "lucide-react";

const classesData = [
  { name: "Kids Dance", icon: <PersonStanding size={32} /> },
  { name: "Bollywood", icon: <Music size={32} /> },
  { name: "Hip Hop", icon: <Flame size={32} /> },
  { name: "Zumba", icon: <Activity size={32} /> },
  { name: "Aerobics", icon: <HeartPulse size={32} /> },
  { name: "Bhangra", icon: <Music size={32} /> },
  { name: "Garba", icon: <PersonStanding size={32} /> },
  { name: "Classical / Kathak", icon: <Music size={32} /> },
  { name: "Acrobatic Dance", icon: <Activity size={32} /> },
  { name: "Bharatanatyam", icon: <PersonStanding size={32} /> },
];

export default function Classes() {
  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="classes">
      <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>Our Classes</h2>
      <div className={styles.galleryGrid}>
        {classesData.map((cls, idx) => (
          <div key={idx} className={styles.card}>
            <div style={{ color: "var(--color-maroon)", marginBottom: "1rem" }}>{cls.icon}</div>
            <h3 style={{ color: "var(--color-white)", fontSize: "1.3rem" }}>{cls.name}</h3>
            <div className={styles.levelTags}>
              <span className={styles.tag}>Beginner</span>
              <span className={styles.tag}>Intermediate</span>
              <span className={styles.tag}>Advanced</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
