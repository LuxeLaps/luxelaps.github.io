import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import Hero from '../../assets/hero.png'

export default function About() {
  return (
    <motion.section className="about-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <img src={Hero} alt="Hero" className="about-img" />
      <h1>About Satyam</h1>
      <motion.div className="about-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h3>Experience</h3>
        <ul>
          <li>Fullstack Developer - LuxeLaps (2025)</li>
          <li>Freelancer (2021-2023)</li>
        </ul>
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>React</li>
          <li>NextJS 15</li>
          <li>Python</li>
          <li>My SQL, Mongo db, Supabase</li>
          <li>JavaScript (ES6+)</li>
          <li>CSS3</li>          
          <li>Responsive Design</li>
          <li>Git, Github, Github pages</li>
          <li>AI</li>

          
        </ul>
        <h3>Education</h3>
        <ul>
          <li>BCA - Computer Science,MDU (2024-202*)</li>
          <li>Senior Secondary - Vijaya Sr. Sec. School(2024)</li>
        </ul>
      </motion.div>
    </motion.section>
  );
} 