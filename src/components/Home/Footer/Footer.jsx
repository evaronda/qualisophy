import React from "react";
import useAnimation from "../../hooks/useAnimation"; // Import the animation hook
import "./Footer.css";

const Footer = React.forwardRef((props, ref) => {
  // Apply the animation hook to elements with the "animated" class
  useAnimation(".footer.animated");

  return (
    <div className="footer animated" ref={ref}> {/* Add the "animated" class */}
      <div className="footer-content">
        <p className="footer-text" style={{ color: 'white' }}>
          © 2025 Qualisophy. Todos los derechos reservados.
        </p>
        <p className="footer-contact" style={{ color: 'white' }}>
          Email: <a href="http://localhost:3000/contact" style={{ color: 'white' }}>contact@qualisophy.com</a> | Teléfono: <a href="tel:+1234567890" style={{ color: 'white' }}>+1 234 567 890</a>
        </p>
      </div>
    </div>
  );
});

export default Footer;