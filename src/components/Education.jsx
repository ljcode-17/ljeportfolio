import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Polytechnic University of the Philippines – Lopez Campus",
    period: "2022 – Present | Current GPA: 1.54",
    details: [
      "President’s Lister (2022 & 2025)",
      "Dean’s Lister (2022 – 2024)",
      "Academic Awardee (S.Y. 2022–2023)",
      "Academic Awardee (S.Y. 2023–2024)",
      "Academic Awardee (S.Y. 2025–2026)"
    ]
  },
  {
    degree: "Senior High School",
    school: "Tagkawayan National High School",
    period: "2020 – 2022",
    details: [
      "With Honors",
      "Participant, 4th De La Salle University Senior High School Research Congress",
      "3rd Place, 1st Quezon Division Science and Technology Fair"
    ]
  },
  {
    degree: "Junior High School",
    school: "Our Lady of Lourdes Academy",
    period: "2016 – 2020",
    details: ["With Honors"]
  },
  {
    degree: "Elementary & Kindergarten",
    school: "Tagkawayan Central Elementary School",
    period: "2009 – 2016",
    details: []
  }
];

export default function Education() {
  return (
    <section id="education" style={{ padding: '120px 5%', position: 'relative', zIndex: 1, background: 'var(--bg-subtle)' }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center', marginBottom: '4rem', color: 'var(--text)' }}>
          My <span style={{ color: 'var(--accent)' }}>Education</span>
        </h2>
        
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'var(--border)' }} />
          
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              style={{ position: 'relative', paddingLeft: '60px', marginBottom: '40px' }}
            >
              <div style={{ 
                position: 'absolute', left: '11px', top: 0, width: '20px', height: '20px', 
                background: 'var(--bg)', border: '4px solid var(--accent)', borderRadius: '50%', zIndex: 1 
              }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '4px', color: 'var(--text)' }}>{item.degree}</h3>
              <h4 style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '8px' }}>{item.school}</h4>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '12px' }}>{item.period}</p>
              {item.details.length > 0 && (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px', fontSize: '0.95rem', color: 'var(--text)' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>&rarr;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
