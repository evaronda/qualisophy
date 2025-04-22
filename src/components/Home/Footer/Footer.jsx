import React from 'react';
import './Footer.css'; // Importiamo un file CSS per il footer

const Footer = React.forwardRef((props, ref) => {
  return (
    <div className="footer" ref={ref}> {/* Aggiungi il ref al div del footer */}
      <div className="footer-content">
        <p className="footer-text">© 2025 Qualisophy. Todos los derechos reservados.</p>
        <p className="footer-contact">
          Email: <a href="http://localhost:3000/contact">contact@qualisophy.com</a> | Phone: <a href="tel:+1234567890">+1 234 567 890</a>
        </p>
        </div>
      </div>
  );
});

export default Footer;
