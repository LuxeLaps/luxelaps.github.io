import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A modern, animated portfolio built with React, Vite, and Framer Motion.',
    link: 'https://luxelaps.github.io/',
  },
  {
    title: 'E-commerce App',
    desc: 'A full-stack e-commerce app with cart, payments, and admin dashboard.',
    link: '#',
  },
  {
    title: 'Blog Platform',
    desc: 'A blog platform with markdown support and user authentication.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <motion.section className="projects-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project, i) => (
          <motion.div
            className="project-card"
            key={project.title}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 