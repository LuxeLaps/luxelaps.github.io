import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import Hero from '../../assets/hero3.png'

export default function Home() {
  return (
    <section className="hero-section">
      <img src={Hero} alt="Hero" className="hero-img" />
      <motion.div className="hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h1>
          We are <span className="highlight">Cyber Souls</span>
        </h1>
        <h2>Welcome to our Website.</h2>
        <motion.a href="/projects" className="cta-btn" whileHover={{ scale: 1.08 }}>
          View our Work
        </motion.a>
      </motion.div>
    </section>
  );
} 