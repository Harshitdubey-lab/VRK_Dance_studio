import styles from "../app/page.module.css";
import { Camera, MapPin, Sparkles, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerContent}>
        <div className={styles.logo} style={{ justifyContent: "center", color: "var(--color-white)" }}>
          <div className={styles.logoIcon}>
            <Sparkles color="var(--color-maroon)" size={24} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-start", textAlign: "left" }}>
            <span style={{ fontWeight: 600, fontSize: "1.1em", lineHeight: 1, letterSpacing: "1px", color: "var(--color-midnight)" }}>VRK</span>
            <span style={{ fontSize: "0.55em", letterSpacing: "2px", lineHeight: 1, color: "var(--color-text-dim)" }}>DANCE STUDIO</span>
          </div>
        </div>
        
        <div style={{ color: "var(--color-text-dim)" }}>
          <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <MapPin size={18} color="var(--color-hot-pink)" />
            Saraswati Nagar Rasuliya
          </p>
          <p>Hoshangabad (Narmadapuram), Madhya Pradesh</p>
          <p style={{ marginTop: "1rem" }}>Open until 9:00 PM</p>
        </div>

        <div className={styles.socials} style={{ justifyContent: "center" }}>
          <a href="https://www.instagram.com/vrk_dance_studio/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <Camera size={20} />
          </a>
          <a href="https://wa.me/917999494608" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <MessageCircle size={20} />
          </a>
        </div>

        <div style={{ color: "var(--color-text-dim)", fontSize: "0.9rem", marginTop: "2rem" }}>
          &copy; {new Date().getFullYear()} VRK Dance Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
