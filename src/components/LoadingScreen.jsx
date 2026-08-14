import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before hiding
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0F172A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        color: '#F1F5F9'
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: [0.95, 1.03, 1], opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          style={{
            width: 78,
            height: 78,
            borderRadius: 14,
            background: 'linear-gradient(180deg, var(--accent), var(--accent-hover))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 34px rgba(20,184,166,0.18)'
          }}
        >
          <div style={{ color: 'white', fontWeight: 900, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>LJCL</div>
        </motion.div>

        <div style={{ textAlign: 'left' }}>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '1.25rem', margin: 0, fontWeight: 800, color: '#F1F5F9' }}
          >
            Lloyd Loteriña
          </motion.h1>
          <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Portfolio</div>
        </div>
      </motion.div>

      <div style={{ width: '260px', height: '6px', background: '#1f2937', borderRadius: 6, overflow: 'hidden' }}>
        <motion.div
          style={{ height: '100%', background: 'linear-gradient(90deg, rgba(20,184,166,0.95), rgba(20,184,166,0.6))' }}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.25 }}
        />
      </div>
      <div style={{ marginTop: '0.9rem', fontSize: '0.85rem', color: '#94A3B8' }}>
        {Math.min(progress, 100)}%
      </div>
    </motion.div>
  );
}
