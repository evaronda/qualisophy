import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Logo di sfondo */}
      <img src="/logobackground.png" alt="Logo" className="logo-background" />

      {/* Contenitore per il testo */}
      <div className="text-container">
        <h1 className="title">
          Quark <span className="highlight">Techie</span>
          <br /> quality for the best
        </h1>
        <p className="subtitle">
          Specialized Consulting in Software Quality Assurance
        </p>
        <p className="impact-statement">
          Ensure your software’s success with our team of quality assurance experts.
        </p>
        <div className="button-container">
          <a href="/contact" className="button">
            Get Your Free Audit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
