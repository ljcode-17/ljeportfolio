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
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: '2rem', letterSpacing: '0.2em', marginBottom: '2rem' }}
      >
        L C L
      </motion.h1>
      <div style={{ width: '200px', height: '2px', background: '#334155', overflow: 'hidden' }}>
        <motion.div
          style={{ height: '100%', background: '#14B8A6' }}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#94A3B8' }}>
        {Math.min(progress, 100)}%
      </div>
    </motion.div>
  );
}
