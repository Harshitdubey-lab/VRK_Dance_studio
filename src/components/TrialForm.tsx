"use client";

import { useState } from "react";
import styles from "../app/page.module.css";

export default function TrialForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const message = `Hello VRK Dance Studio! I would like to book a trial class.\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Age Group:* ${data.ageGroup}\n*Class Interest:* ${data.classInterest}\n*Preferred Timing:* ${data.timing}\n*Message:* ${data.message || 'None'}`;
      const phone = "917999494608"; // Studio WhatsApp Number
      const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setError("An error occurred while redirecting to WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalWrapper} id="trial">
      <div className={styles.modalContent}>
        <a href="#!" className={styles.modalClose}>&times;</a>
        <h2 className={styles.sectionTitle} style={{ color: "var(--color-maroon)", marginBottom: "1.5rem", fontSize: "1.8rem" }}>Book a Trial Class</h2>
        
        {success && (
          <div style={{ padding: "1rem", background: "rgba(130, 75, 75, 0.05)", border: "1px solid var(--color-maroon)", color: "var(--color-maroon)", borderRadius: "8px", marginBottom: "1.5rem", textAlign: "center" }}>
            Thank you! Your request has been sent. We will contact you on WhatsApp soon.
          </div>
        )}
        {error && (
          <div style={{ padding: "1rem", background: "rgba(255, 0, 0, 0.05)", border: "1px solid red", color: "red", borderRadius: "8px", marginBottom: "1.5rem", textAlign: "center" }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone / WhatsApp Number</label>
            <input type="tel" id="phone" name="phone" required placeholder="+91 79994 94608" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="ageGroup">Age Group</label>
            <select id="ageGroup" name="ageGroup" required>
              <option value="">Select an option</option>
              <option value="kids">Kids (Under 12)</option>
              <option value="teens">Teens (13-19)</option>
              <option value="adults">Adults</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="classInterest">Class Interest</label>
            <select id="classInterest" name="classInterest" required>
              <option value="">Select an option</option>
              <option value="dance">Dance (Bollywood, Hip Hop, etc.)</option>
              <option value="fitness">Fitness (Zumba, Aerobics)</option>
              <option value="classical">Classical / Kathak</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="timing">Preferred Timing</label>
            <input type="text" id="timing" name="timing" placeholder="e.g. Evening, Morning" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Any Message</label>
            <textarea id="message" name="message" rows={2} placeholder="Optional message..."></textarea>
          </div>
          <button type="submit" className={styles.btnPrimary} style={{ width: "100%", marginTop: "1rem" }} disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
