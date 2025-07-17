import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import logo from '../../assets/logo.png'; // Import logo asset
import '../styles/Navbar.css';

// Navigation links for the navbar
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      // Navbar container with position: relative for absolute positioning of theme toggle
      <>
    <div className="navbar">
      {/* Logo and site name wrapped in NavLink to home */}
      <NavLink to="/" className="navbar-logo" aria-label="Go to home page">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">Satyam</span>
      </NavLink>
      {/* Desktop nav links */}
      <ul className="navbar-links">
        {navLinks.map(link => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) => isActive ? 'active' : ''}
              end
            >
              {({ isActive }) => (
                <span className="nav-link-text">
                  {link.label}
                  <motion.div
                    className="nav-underline"
                    layoutId="underline"
                    style={{ visibility: isActive ? 'visible' : 'hidden' }}
                  />
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Mobile menu button */}
      <button
        className="navbar-menu-btn"
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="navbar-mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 80 }}
          >
            {navLinks.map(link => (
              <li key={link.to} onClick={() => setMenuOpen(false)}>
                <NavLink to={link.to} className={({ isActive }) => isActive ? 'active' : ''} end>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {/* Absolutely positioned theme toggle for accessibility and separation from nav links */}
      
    </div>
      <div className="theme-toggle-container">
      </div>
  </>);
} 