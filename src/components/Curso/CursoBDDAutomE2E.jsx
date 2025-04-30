import React, { useEffect } from "react";
import "./CursoBDDAutomE2E.css";

const CursoBDDAutomE2E = () => {
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
    <div className="curso-bdd">
      {/* Hero Section */}
      <div className="hero-section slide-in-zoom">
        <img
          src="/bdd.jpg"
          alt="Curso BDD"
          className="hero-image"
        />
        <h1 className="hero-title">Curso BDD y Automatización E2E</h1>
        <p className="hero-subtitle" style={{ color: 'white' }}>
          Aprende a diseñar, implementar y mantener pruebas automatizadas utilizando herramientas como Cucumber, Cypress y más.
        </p>
      </div>

      {/* Modules Section */}
      <div className="modules-section slide-in-zoom">
        <h2>Módulos del Curso</h2>
        <ul>
          <li><strong>Módulo 1:</strong> Fundamentos de BDD</li>
          <li><strong>Módulo 2:</strong> Sintaxis Gherkin y Cucumber</li>
          <li><strong>Módulo 3:</strong> Automatización E2E con Cypress</li>
          <li><strong>Módulo 4:</strong> Integración continua y pruebas automatizadas</li>
        </ul>
      </div>

      {/* Instructor Section */}
      <div className="instructor-section slide-in-zoom">
        <h2>Instructor</h2>
        <p>
          Este curso es impartido por profesionales con experiencia en QA y automatización de pruebas en entornos Agile.
        </p>
      </div>

      {/* Details Section */}
      <div className="details-section slide-in-zoom">
        <h2>Detalles del Curso</h2>
        <ul>
          <li><strong>Inicio:</strong> 10 de Marzo de 2025</li>
          <li><strong>Duración:</strong> 30 horas (6 semanas)</li>
          <li><strong>Horario:</strong> Martes y Jueves, 18:00 a 20:30</li>
          <li><strong>Coste:</strong> 420 € (en un solo pago o 2 cuotas de 210 €)</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact-section slide-in-zoom">
        <h2>Inscripción</h2>
        <p>
          Para más información, contáctanos en <a href="mailto:hello@qualisophy.com">hello@qualisophy.com</a> o
          llama al <strong>123 123 123</strong>.
        </p>
        <div className="final-button-section">
          <button
            className="sky-blue-button"
            onClick={() => (window.location.href = "/curso_formulario")}
          >
            Inscribirse Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default CursoBDDAutomE2E;
