import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      padding: '0 5%',
      zIndex: 1,
      overflow: 'hidden'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        width: '100%', 
        margin: '0 auto', 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap-reverse',
        gap: '2rem',
        paddingTop: '80px',
        paddingBottom: '40px'
      }} className="hero-container">
        
        <div style={{ flex: '1 1 500px' }} className="hero-text">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(20, 184, 166, 0.1)',
              color: 'var(--accent)',
              borderRadius: '100px',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              border: '1px solid rgba(20, 184, 166, 0.2)'
            }}>Information Technology Student</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              fontSize: 'clamp(2.2rem, 8vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              color: 'var(--text)'
            }}
          >
            Lloyd Jernell<br />
            <span style={{ color: 'var(--accent)' }}>Loteriña</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              fontSize: 'clamp(1rem, 4vw, 1.2rem)',
              color: 'var(--text-muted)',
              maxWidth: '600px',
              marginBottom: '2.5rem'
            }}
          >
            Frontend Development, UI/UX Design & System Support. Building intuitive digital experiences with cinematic precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            className="hero-btns"
          >
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-hover)' }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              style={{
                padding: '12px 28px',
                backgroundColor: 'var(--accent)',
                color: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 600,
                boxShadow: '0 4px 14px 0 rgba(20, 184, 166, 0.39)',
                textAlign: 'center'
              }}
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)', color: 'white' }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              style={{
                padding: '12px 28px',
                backgroundColor: 'rgba(20, 184, 166, 0.1)',
                color: 'var(--accent)',
                border: '2px solid var(--accent)',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.3s',
                textAlign: 'center'
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            style={{ display: 'flex', gap: '2rem', marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}
            className="hero-stats"
          >
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>1.54</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>Current GPA</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>Docs</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>Documentation-Oriented</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>Multi</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>Tools & Platforms</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.4 }}
          style={{
            flex: '1 1 300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2
          }}
          className="hero-image"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              width: 'clamp(200px, 40vw, 400px)',
              aspectRatio: '1/1',
              borderRadius: '30%',
              overflow: 'hidden',
              border: '4px solid rgba(20, 184, 166, 0.3)',
              boxShadow: '0 0 40px rgba(20, 184, 166, 0.2)',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(45deg, rgba(20, 184, 166, 0.2), transparent)',
              zIndex: 1,
              pointerEvents: 'none'
            }} />
            <img 
              src="/assets/lj.png" 
              alt="Lloyd Jernell Loteriña" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(1.1) brightness(0.9)'
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column-reverse !important;
            text-align: center;
            justify-content: center !important;
            gap: 3rem !important;
            padding-top: 100px !important;
          }
          .hero-text {
            flex: 1 1 auto !important;
            width: 100%;
          }
          .hero-btns {
            justify-content: center;
          }
          .hero-stats {
            justify-content: center;
            gap: 1.5rem !important;
          }
          .hero-image {
             flex: 0 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
}
