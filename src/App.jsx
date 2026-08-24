import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
        <div className="aura-bg" data-theme={theme}>
          {theme === 'light' && (
            <>
              <div className="aura-layer-1" aria-hidden="true" />
              <div className="aura-layer-2" aria-hidden="true" />
              <div className="aura-layer-3" aria-hidden="true" />
              <div className="aura-layer-4" aria-hidden="true" />
              <div className="aura-grain" aria-hidden="true">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <filter id="aura-grain-filter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
                    <feColorMatrix
                      type="matrix"
                      values="0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0 0 0 1 0"
                    />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#aura-grain-filter)" />
                </svg>
              </div>
            </>
          )}

          <div className="aura-content">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero3D theme={theme} />
            <Hero theme={theme} />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Experience />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
