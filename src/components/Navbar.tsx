import styles from "../app/page.module.css";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Sparkles color="var(--color-maroon)" size={24} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-start" }}>
          <span style={{ fontWeight: 600, fontSize: "1.1em", lineHeight: 1, letterSpacing: "1px" }}>VRK</span>
          <span style={{ fontSize: "0.55em", letterSpacing: "2px", lineHeight: 1, color: "var(--color-text-dim)" }}>DANCE STUDIO</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="#trial" className={styles.btnSecondary}>
          Contact Us
        </a>
      </div>
    </nav>
  );
}
