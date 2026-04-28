import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const cards = [
    { 
      icon: "🎨", 
      title: "Who I Am", 
      desc: "An IT student with a strong passion for Frontend Development, UI/UX Design, and technical problem-solving. I focus on creating intuitive, visually engaging, and user-centered digital experiences." 
    },
    { 
      icon: "✨", 
      title: "What I Do", 
      desc: "I bridge the gap between technical logic and visual design. Whether it's crafting responsive interfaces or refining user workflows, I focus on aesthetics, usability, and clarity." 
    },
    { 
      icon: "🚀", 
      title: "My Goal", 
      desc: "To secure a role as a Frontend Developer or UI/UX Designer where I can leverage my eye for detail and technical skills to build high-quality web solutions. I aim to contribute to creative projects while continuing to refine my expertise in modern web technologies." 
    }
  ];

  return (
    <section id="about" style={{ padding: '120px 5%', position: 'relative', zIndex: 1, background: 'var(--bg-subtle)' }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center', marginBottom: '4rem', color: 'var(--text)' }}>
          About <span style={{ color: 'var(--accent)' }}>Me</span>
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -10, boxShadow: 'var(--shadow)', borderColor: 'var(--accent)' }}
              style={{
                background: 'var(--card-bg)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '2.5rem',
                transition: 'border-color 0.3s ease'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{card.icon}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text)' }}>{card.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
