import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ theme }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    
    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const isDark = theme === 'dark';

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      border: `1px solid ${isDark ? "rgba(20, 184, 166, 0.3)" : "rgba(13, 148, 136, 0.4)"}`,
      backgroundColor: "transparent",
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      border: `2px solid ${isDark ? "rgba(20, 184, 166, 1)" : "rgba(13, 148, 136, 1)"}`,
      backgroundColor: "rgba(20, 184, 166, 0.05)",
    }
  };

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        @media (max-width: 768px) {
          * { cursor: auto !important; }
          .custom-cursor { display: none !important; }
        }
      `}</style>
      
      {/* Outer Ring */}
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={isHovered ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovered ? 1.5 : 1
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          backgroundColor: isDark ? '#14B8A6' : '#0D9488',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10001,
          boxShadow: isDark ? '0 0 10px rgba(20, 184, 166, 0.5)' : 'none'
        }}
      />
    </>
  );
}
