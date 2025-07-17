import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import Hero from '../../assets/hero.png'

export default function Home() {
  return (
    <section className="hero-section">
      <img src={Hero} alt="Hero" className="hero-img" />
      <motion.div className="hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h1>
          Hey, I'm <span className="highlight">Satyam</span>
        </h1>
        <h2>Welcome to my Portfolio website.</h2>
        <motion.a href="/projects" className="cta-btn" whileHover={{ scale: 1.08 }}>
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
} 