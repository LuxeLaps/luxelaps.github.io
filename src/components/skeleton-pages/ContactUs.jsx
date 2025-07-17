import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // empty the form
    form.current.reset();

    emailjs
      .sendForm('service_t045bhq', 'template_uya6lbb', form.current, {
        publicKey: 'VnfUEVHsdeklFabox',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
            alert('Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
