import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Blog.css';

const posts = [
  {
    title: 'How I Built My Portfolio',
    desc: 'A behind-the-scenes look at building this site with React and Vite.',
    link: '#',
  },
  {
    title: 'Top 10 Frontend Tips',
    desc: 'My favorite tips for writing clean, maintainable frontend code.',
    link: '#',
  },
  {
    title: 'Why Animations Matter',
    desc: 'How micro-interactions and transitions improve UX.',
    link: '#',
  },
];

export default function Blog() {
  return (
    <motion.section className="blog-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <h1>My Blog</h1>
      <div className="blog-list">
        {posts.map((post, i) => (
          <motion.div
            className="blog-card"
            key={post.title}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-link">Read More</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 