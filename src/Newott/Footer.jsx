import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="newsletter">
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="Email address" required />
      <button type="submit">Get Started</button>
      </form>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h4>Explore</h4>
          <Link to="/home">Home</Link>
          <Link to="/home">Trending</Link>
          <Link to="/home">Top 10</Link>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <Link to="/home">Privacy Policy</Link>
          <Link to="/home">Terms of Use</Link>
          <Link to="/home">Support</Link>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <Link to="/home"><i className="fab fa-facebook-f"></i> Facebook</Link>
          <Link to="/home"><i className="fab fa-twitter"></i> Twitter</Link>
          <Link to="/home"><i className="fab fa-instagram"></i> Instagram</Link>
        </div>
      </div>

      <div className="back-to-top" onClick={scrollToTop}>
        ↑ Back to Top
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} MyOTT. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
