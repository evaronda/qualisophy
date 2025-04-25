import React, { useEffect } from "react";
import "./Working.css";

const Working = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".slide-in-zoom");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="curso-calidad-software">
      {/* Hero Section */}
      <div className="hero-section slide-in-zoom">
        <img
          src="/Partnership.webp"
          alt="Programa de Colaboración"
          className="hero-image"
        />
        <h1 className="hero-title">PROGRAMA DE COLABORACIÓN</h1>
        <p className="hero-subtitle">
          Conecta con el mejor talento de nuestros cursos para cubrir tus vacantes.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="introduction-section slide-in-zoom">
        <h2>¿Qué es el Programa de Colaboración?</h2>
        <p>
          Ofrecemos a las empresas colaboradoras la posibilidad de acceder directamente a nuestros alumnos destacados,
          formados en tecnologías actuales y con orientación práctica desde el primer día.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="modules-section slide-in-zoom">
        <h2>Ventajas para Empresas</h2>
        <ul>
          <li>
            <strong>Talento Certificado:</strong> Candidatos formados y evaluados en metodologías ágiles, testing y automatización.
          </li>
          <li>
            <strong>Acceso Prioritario:</strong> Accede antes que nadie a los perfiles más prometedores.
          </li>
          <li>
            <strong>Alianzas Estratégicas:</strong> Refuerza tu equipo con talento alineado a tus valores y visión.
          </li>
          <li>
            <strong>Visibilidad:</strong> Aparece como empresa colaboradora en nuestra web y canales.
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact-section slide-in-zoom">
        <h2>¿Quieres unirte?</h2>
        <p>
          Escríbenos a <a href="mailto:colaboraciones@qualisophy.com">colaboraciones@qualisophy.com</a> o
          agenda una reunión con nuestro equipo.
        </p>
        <div className="final-button-section">
          <button
            className="sky-blue-button"
            onClick={() => (window.location.href = "/contact")}
          >
            Quiero Colaborar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Working;