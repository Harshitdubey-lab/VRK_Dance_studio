"use client";

import styles from "../app/page.module.css";
import { Camera } from "lucide-react";

export default function Gallery() {
  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="gallery">
      <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>Instagram Reels</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1rem",
        marginBottom: "3rem"
      }}>
        <div style={{ borderRadius: "16px", overflow: "hidden", height: "350px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <img src="/gallery_1.png" alt="Ballet Dancer" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
        </div>
        <div style={{ borderRadius: "16px", overflow: "hidden", height: "350px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <img src="/gallery_2.png" alt="Hip Hop Dancer" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
        </div>
        <div style={{ borderRadius: "16px", overflow: "hidden", height: "350px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <img src="/gallery_3.png" alt="Contemporary Dancer" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
        </div>
      </div>
      
      <div style={{ textAlign: "center" }}>
        <a 
          href="https://www.instagram.com/vrk_dance_studio/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.btnSecondary}
          style={{ display: "inline-flex" }}
        >
          <Camera size={20} />
          More on Instagram
        </a>
      </div>
    </section>
  );
}
