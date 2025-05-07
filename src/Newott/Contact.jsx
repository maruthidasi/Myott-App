// Newott/Contact.jsx
import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions, feedback, or support issues, please reach out to us using the form below.</p>
      
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
