import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text-container">
          <h1 className="about-title">Consultoría</h1>
          <p className="about-text">
            En Qualisophy, ofrecemos servicios de consultoría especializados para pequeñas empresas que buscan orientación técnica en sus proyectos, ya sean nuevos o existentes. Aportamos nuestra experiencia en calidad de software y desarrollo para ayudarte a tomar decisiones informadas, ahorrar costes y lograr resultados sostenibles.
          </p>
        </div>

        <div className="about-image">
          <a href="/contact" className="about-button">
            ¡Hablemos de tu proyecto!
          </a>
        </div>

        <div className="about-image">
          <a href="/contact" className="button">
            Let's Build Together
          </a>
        </div>
      </div>

      <section className="why-quark-techie">
        <div className="container">
          <h2>
            ¿Por qué confiar en <span style={{ color: "#567b7f" }}>Qualisophy</span>?
          </h2>
          <div className="why-quark-techie-img-p">
            <p className="why-quark-techie-p">
              <b>
                Si necesitas apoyo experto para lanzar, evaluar o mejorar tu producto digital, estás en el lugar correcto. Nuestro equipo ofrece soluciones personalizadas, eficaces y adaptadas al entorno tecnológico y necesidades de tu empresa.
              </b>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


