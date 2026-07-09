"use client";

import { useState } from "react";
import styles from "../app/page.module.css";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppQuickActions() {
  const [open, setOpen] = useState(false);

  const phone = "919876543210";
  const actions = [
    { label: "Book Trial Class", msg: "I want to book a trial class." },
    { label: "Ask Fees", msg: "Can you share the fee structure?" },
    { label: "Get Location", msg: "Please share the exact studio location." },
    { label: "Join Kids Batch", msg: "I want to enroll my kid." },
    { label: "Join Zumba Batch", msg: "I'm interested in Zumba fitness." },
    { label: "Wedding Choreography", msg: "I need details for wedding choreography." },
  ];

  return (
    <>
      {open && (
        <div className={styles.waMenu}>
          <div style={{ color: "var(--color-white)", padding: "0.5rem", fontWeight: "bold", borderBottom: "1px solid rgba(0,0,0,0.1)", marginBottom: "0.5rem" }}>
            Quick Inquiries
          </div>
          {actions.map((act, i) => (
            <a 
              key={i} 
              href={`https://wa.me/${phone}?text=${encodeURIComponent(act.msg)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.waMenuItem}
            >
              {act.label}
            </a>
          ))}
        </div>
      )}
      <div className={styles.floatingWhatsapp} onClick={() => setOpen(!open)}>
        {open ? <X size={32} color="white" /> : <MessageCircle size={32} color="white" />}
      </div>
    </>
  );
}
