import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaSearch } from 'react-icons/fa';
import '../styles/Services.css';

const services = [
  {
    icon: <FaCode size={32} />, title: 'Web Development',
    desc: 'Responsive, modern websites tailored to your needs.', price: '$199 one time or custom quote.'
  },
  {
    icon: <FaMobileAlt size={32} />, title: 'Mobile App Development',
    desc: 'User-friendly mobile apps for Android and iOS.', price: 'Starting at $499.'
  },
  {
    icon: <FaSearch size={32} />, title: 'SEO Optimization',
    desc: 'Improve your website’s visibility on search engines.', price: '$99 per month.'
  },
];

export default function Services() {
  return (
    <motion.section className="services-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <h1>Services</h1>
      <div className="services-list">
        {services.map((service, i) => (
          <motion.div
            className="service-card"
            key={service.title}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span className="service-price">{service.price}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 