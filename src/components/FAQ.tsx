"use client";

import { useState } from "react";
import styles from "../app/page.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { q: "Is trial class available?", a: "Yes, you can book a trial class easily via WhatsApp." },
    { q: "What is the minimum age for kids?", a: "We accept kids starting from 4 years old." },
    { q: "Do you teach beginners?", a: "Absolutely! We have dedicated beginner batches for all age groups." },
    { q: "What are the fees?", a: "Fee structure depends on the batch and style. Please contact us on WhatsApp for exact details." },
    { q: "Is there a ladies batch?", a: "Yes, we have specialized Ladies Fitness and Zumba batches." },
    { q: "Are offline classes available?", a: "Yes, we strictly provide engaging offline classes at our Narmadapuram studio." },
    { q: "Do you provide wedding choreography?", a: "Yes, we provide end-to-end wedding choreography for couples, families, and friends." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="faq">
      <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>Frequently Asked Questions</h2>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {faqs.map((faq, idx) => (
          <div key={idx} className={styles.faqItem}>
            <div 
              className={styles.faqQuestion} 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span style={{ color: "var(--color-white)" }}>{faq.q}</span>
              {openIdx === idx ? <ChevronUp color="var(--color-maroon)" /> : <ChevronDown color="var(--color-maroon)" />}
            </div>
            {openIdx === idx && (
              <div className={styles.faqAnswer}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
