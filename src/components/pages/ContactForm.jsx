import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../styles/ContactForm.css';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('');
    emailjs
      .sendForm('service_t045bhq', 'template_uya6lbb', form.current, {
        publicKey: 'VnfUEVHsdeklFabox',
      })
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          setStatus('error');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <motion.section className="contact-section" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <motion.input type="submit" value="Send" whileHover={{ scale: 1.05 }} />
      </form>
      {status === 'success' && <motion.p className="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Message sent! 🎉</motion.p>}
      {status === 'error' && <motion.p className="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Failed to send. Try again.</motion.p>}
    </motion.section>
  );
} 