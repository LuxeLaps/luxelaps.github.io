import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/ThemeToggle.css';

/**
 * ThemeToggle - A floating button to toggle dark/light mode.
 * Only one instance should exist, ideally in the navbar.
 */
export default function ThemeToggle() {
  // Detect system preference on first load
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    document.body.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <motion.button
      className="theme-toggle"
      onClick={() => setDark(d => !d)}
      whileTap={{ scale: 0.9 }}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? <FaSun /> : <FaMoon />}
    </motion.button>
  );
} 