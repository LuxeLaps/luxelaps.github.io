import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const socialLinks = [
  { href: 'https://linkedin.com/in/yourprofile', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://github.com/raosatyam152', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://twitter.com/yourprofile', icon: <FaTwitter />, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div className="footer-socials" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        {socialLinks.map(link => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label={link.label}>
            {link.icon}
          </a>
        ))}
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        &copy; {new Date().getFullYear()} Satyam's Portfolio. All rights reserved.
      </motion.p>
    </footer>
  );
} 