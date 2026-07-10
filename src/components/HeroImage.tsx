import styles from "../app/page.module.css";
import { MessageCircle, Camera, MapPin } from "lucide-react";

export default function HeroImage() {
  return (
    <div className={styles.heroGrid}>
      <div className={styles.heroText}>
        <h1 className={styles.headline} style={{ color: "var(--color-white)" }}>Move with confidence.</h1>
        <p className={styles.subheadline}>
          Dance, fitness, and stage-ready training in Narmadapuram.
        </p>
        <div className={styles.ctaGroup}>
          <a href="https://wa.me/917999494608" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MessageCircle size={20} />
            Book Trial
          </a>
          <a href="https://www.instagram.com/vrk_dance_studio/" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
            <Camera size={20} />
            Instagram
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=22%C2%B044'11.7%22N+77%C2%B043'18.7%22E" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MapPin size={20} />
            Location
          </a>
        </div>
      </div>
      
      <div className={styles.heroImageContainer}>
        <img 
          src="/hero_dancer.png" 
          alt="Elegant Dancer" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
        />
      </div>
    </div>
  );
}
