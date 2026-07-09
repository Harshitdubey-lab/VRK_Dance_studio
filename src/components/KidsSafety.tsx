import styles from "../app/page.module.css";
import { ShieldCheck, Smile, Users, HeartHandshake, Mic2 } from "lucide-react";

export default function KidsSafety() {
  const points = [
    { label: "Age-wise Batches", icon: <Users size={32} /> },
    { label: "Friendly Trainer Environment", icon: <Smile size={32} /> },
    { label: "Offline Classes", icon: <ShieldCheck size={32} /> },
    { label: "Confidence Building", icon: <HeartHandshake size={32} /> },
    { label: "Stage Exposure", icon: <Mic2 size={32} /> },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="kids-safety">
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>Parent Trust & Kids Safety</h2>
        <p style={{ color: "var(--color-text-dim)", maxWidth: "600px", margin: "0 auto" }}>
          We provide a safe, nurturing, and highly supportive environment for children to learn and grow their confidence.
        </p>
      </div>
      
      <div className={styles.grid3}>
        {points.map((pt, idx) => (
          <div key={idx} style={{ 
            background: "var(--color-true-white)", 
            padding: "2rem", 
            borderRadius: "0", 
            textAlign: "center",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
          }}>
            <div style={{ color: "var(--color-maroon)", marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
              {pt.icon}
            </div>
            <h4 style={{ color: "var(--color-white)", fontSize: "1.1rem" }}>{pt.label}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
