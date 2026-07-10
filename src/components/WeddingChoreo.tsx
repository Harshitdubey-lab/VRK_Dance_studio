import styles from "../app/page.module.css";
import { MessageCircle, Users, Heart } from "lucide-react";

export default function WeddingChoreo() {
  const services = [
    { title: "Sangeet Choreography", desc: "Make your Sangeet night unforgettable with energetic performances." },
    { title: "Couple Dance", desc: "Romantic, perfectly choreographed routines for the bride and groom." },
    { title: "Family Dance", desc: "Fun and easy-to-learn steps for parents and relatives." },
    { title: "Bridal Entry", desc: "A mesmerizing and graceful entry sequence." },
    { title: "Group Performance", desc: "Coordinated dances for friends and cousins." },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionDark}`} id="wedding">
      <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>Wedding Choreography</h2>
      <div className={styles.grid2}>
        <div>
          <p style={{ color: "var(--color-text-dim)", marginBottom: "2rem", fontSize: "1.1rem" }}>
            We specialize in creating magical wedding performances that perfectly match your style and song choices. From romantic couple dances to grand family numbers, we make sure everyone shines on stage.
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {services.map((svc, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <Heart color="var(--color-maroon)" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ color: "var(--color-white)", fontSize: "1.1rem" }}>{svc.title}</h4>
                  <p style={{ color: "var(--color-text-dim)", fontSize: "0.9rem" }}>{svc.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/917999494608?text=I need details for wedding choreography" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.btnPrimary}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "2rem" }}
          >
            <MessageCircle size={20} />
            Plan Wedding Dance on WhatsApp
          </a>
        </div>
        <div className={styles.weddingImage} style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--color-maroon)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
          <img src="/wedding_dance.png" alt="Wedding Choreography" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}
