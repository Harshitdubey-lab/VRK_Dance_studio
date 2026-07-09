import styles from "../app/page.module.css";
import { Calendar } from "lucide-react";

export default function Events() {
  const events = [
    { name: "Summer Dance Camp", date: "Upcoming", img: "/event_summer.png" },
    { name: "Garba Workshop", date: "Upcoming", img: "/event_garba.png" },
    { name: "Zumba Workshop", date: "Upcoming", img: "/event_zumba.png" },
    { name: "Annual Performance Day", date: "Upcoming", img: "/event_stage.png" },
    { name: "Special Weekend Workshop", date: "Upcoming", img: "/event_weekend.png" },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="events">
      <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>Events & Workshops</h2>
      <div className={styles.grid3}>
        {events.map((ev, idx) => (
          <div key={idx} className={styles.card} style={{ borderColor: "var(--color-maroon)", padding: 0, overflow: "hidden" }}>
            <div style={{ width: "100%", height: "200px" }}>
              <img src={ev.img} alt={ev.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <h3 style={{ color: "var(--color-white)", fontSize: "1.2rem", margin: 0 }}>{ev.name}</h3>
              <span className={styles.tag} style={{ borderColor: "var(--color-maroon)", color: "var(--color-maroon)" }}>
                {ev.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
