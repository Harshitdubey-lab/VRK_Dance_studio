import styles from "../app/page.module.css";
import { MessageCircle } from "lucide-react";

export default function Timetable() {
  const batches = [
    { name: "Kids Batch", timing: "4:00 PM - 5:00 PM" },
    { name: "Ladies Fitness / Zumba", timing: "10:00 AM & 6:00 PM" },
    { name: "Beginners Batch", timing: "5:00 PM - 6:00 PM" },
    { name: "Advanced Batch", timing: "7:00 PM - 8:30 PM" },
    { name: "Weekend Batch", timing: "Saturday & Sunday Morning" },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="timetable">
      <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>Batch Timings</h2>
      <div className={styles.formContainer} style={{ padding: "2rem", maxWidth: "800px" }}>
        <div className={styles.tableWrapper}>
          <table className={styles.timetable}>
            <thead>
              <tr>
                <th>Batch Name</th>
                <th>Sample Timing</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch, idx) => (
                <tr key={idx}>
                  <td>{batch.name}</td>
                  <td>{batch.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href="https://wa.me/917999494608?text=I want to know the exact timings" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary} style={{ display: "inline-flex" }}>
            <MessageCircle size={20} />
            Ask exact timing on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
