import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <CustomCursor theme={theme} />
      
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div style={{ position: 'relative' }}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          {/* Dynamic Background Elements */}
          <Hero3D theme={theme} />
          
          {theme === 'light' && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
              <motion.div
                animate={{
                  x: [0, 50, -50, 0],
                  y: [0, -30, 30, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  top: '-10%',
                  right: '-5%',
                  width: '600px',
                  height: '600px',
                  background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
              />
            </div>
          )}

          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Awards />
          <Experience />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
