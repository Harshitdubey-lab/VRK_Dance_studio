import styles from "../app/page.module.css";
import { Sparkle } from "lucide-react";

export default function About() {
  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="about">
      <div className={styles.grid2}>
        <div className={styles.aboutContentCard} style={{ position: "relative", zIndex: 2, background: "var(--color-true-white)", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.02)" }}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "left", color: "var(--color-white)" }}>NARMADAPURAM | SINCE 2017</h2>
          <p style={{ color: "var(--color-text-dim)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Welcome to VRK Dance Studio, the premier destination for dance and fitness in Narmadapuram. 
            Established in 2017, we have been nurturing talent and promoting a healthy lifestyle through the joy of movement.
          </p>
          <p style={{ color: "var(--color-text-dim)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Whether you are a beginner looking to learn the basics, a parent seeking a fun activity for your kids, 
            or an advanced learner ready for stage performances, our supportive offline dance environment is designed for everyone.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-white)" }}>
              <Sparkle color="var(--color-maroon)" />
              <span>Professional Training</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-white)" }}>
              <Sparkle color="var(--color-warm-gold)" />
              <span>All Age Groups</span>
            </div>
          </div>
        </div>
        <div className={styles.aboutImageCard} style={{ position: "relative", height: "500px", borderRadius: "0", overflow: "hidden", marginLeft: "-3rem", zIndex: 1, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
          <img src="/about_studio.png" alt="VRK Dance Studio" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}
