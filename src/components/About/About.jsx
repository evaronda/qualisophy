import React from 'react';
import './About.css';
import useAnimation from "../hooks/useAnimation";
import WaveBackground from "../WaveBackground/WaveBackground.jsx"; // Import the wave background component

const About = () => {
  useAnimation(".animated"); // Apply animations to elements with the "animated" class

  return (
    <div>
      <WaveBackground />      
      <div className="about-container animated">
        <div className="about-content animated">
          <div className="consultoria animated">
            <h1 className="about-title animated">Consultoría</h1>
            <p className="about-text animated">
              En Qualisophy, ofrecemos servicios de consultoría especializados para pequeñas empresas que buscan orientación técnica en sus proyectos, ya sean nuevos o existentes. Aportamos nuestra experiencia en calidad de software y desarrollo para ayudarte a tomar decisiones informadas, ahorrar costes y lograr resultados sostenibles.
            </p>
          </div>

          <div className="about-image animated">
            <a href="/contact" className="button animated">
              ¡Hablemos sobre tus ideas!
            </a>
          </div>
        </div>
      </div>

      <section className="why-quark-techie animated">
        <div className="container animated">
          <h2 className="animated">¿Por qué confiar en <font color="#567b7">Qualisophy</font>?</h2>
          <div className="why-quark-techie-img-p animated">
            <p className="why-quark-techie-p animated">
              <b>
                Si necesitas apoyo experto para lanzar, evaluar o mejorar tu producto digital, estás en el lugar correcto. Nuestro equipo ofrece soluciones personalizadas, eficaces y adaptadas al entorno tecnológico y necesidades de tu empresa.
              </b>
            </p>
          </div>
          <img 
            src="/public/logoqa.png" 
            alt="Consultoría en acción" 
            className="about-below-image animated" 
          />
        </div>
      </section>
    </div>
  );
};

export default About;