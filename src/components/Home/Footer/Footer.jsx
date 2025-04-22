import React from 'react';
import './Footer.css'; // Importiamo un file CSS per il footer

const Footer = React.forwardRef((props, ref) => {
  return (
    <div className="footer" ref={ref}> {/* Aggiungi il ref al div del footer */}
      <div className="footer-content">
        <p className="footer-text">© 2025 Quark Techie. All rights reserved.</p>
        <p className="footer-contact">
          Email: <a href="http://localhost:3000/contact">contact@quarktechie.com</a> | Phone: <a href="tel:+1234567890">+1 234 567 890</a>
        </p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <img src="/github.png" alt="GitHub" />
          </a>
          <a href="#!" className="footer-icon">
            <img src="/path-to-icons/placeholder-icon.svg" alt="Icona Vuota" />
          </a>
        </div>
      </div>
    </div>
  );
});

export default Footer;
