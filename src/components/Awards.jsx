import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  { icon: "🏆", title: "Academic Honors (2022 – Present)", desc: "President's Lister and consistent Dean's Lister at Polytechnic University of the Philippines." },
  { icon: "🎖️", title: "Research & Science Participation", desc: "Honored in Senior High School Research Congress (DLSU) and Divison S&T Fair (3rd Place)." },
  { icon: "🏅", title: "Academic Awardee", desc: "Recognized for consistent excellence during S.Y. 2022-2023, 2023-2024, and 2025-2026." }
];

export default function Awards() {
  return (
    <section id="awards" style={{ padding: '120px 5%', position: 'relative', zIndex: 1, background: 'var(--bg-subtle)' }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center', marginBottom: '4rem', color: 'var(--text)' }}>
          Awards & <span style={{ color: 'var(--accent)' }}>Achievements</span>
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -10, borderColor: 'var(--accent)' }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                background: 'var(--card-bg)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '2.5rem',
                transition: 'border-color 0.3s ease'
              }}
            >
              <div style={{ fontSize: '2.5rem' }}>{award.icon}</div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text)' }}>{award.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{award.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '40px', fontSize: '0.9rem' }}>Certificates and supporting documents are available upon request.</p>
      </motion.div>
    </section>
  );
}
