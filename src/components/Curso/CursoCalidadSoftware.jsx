import React, { useEffect } from "react";
import "./CursoCalidadSoftware.css";

const CursoCalidadSoftware = () => {
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
          src="/foto_presentacion_empresarial.jpg"
          alt="Curso Calidad de Software y Testing"
          className="hero-image"
        />
        <h1 className="hero-title">CURSO CALIDAD DE SOFTWARE Y TESTING</h1>
        <p className="hero-subtitle">
          Recibe toda la formación necesaria para llevar a cabo actividades de Testing y Calidad de Software.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="introduction-section slide-in-zoom">
        <h2>¿De qué trata?</h2>
        <p>
          El Testing es la parte del Desarrollo de Software que se encarga de verificar que las aplicaciones,
          servicios y soluciones informáticas funcionan correctamente, y validar que su cometido es el que requieren
          los usuarios. El Testing se engloba como una de las actividades principales dentro de la Calidad del Software.
        </p>
      </div>

      {/* Modules Section */}
      <div className="modules-section slide-in-zoom">
        <h2>Módulos</h2>
        <ul>
          <li>
            <strong>Módulo 1:</strong> Introducción a la Calidad del Software
            <p>Conoce los conceptos básicos del Testing, roles y tipos de pruebas existentes.</p>
          </li>
          <li>
            <strong>Módulo 2:</strong> Testing dentro del Ciclo de Vida de un Desarrollo
            <p>Aprende a planificar, diseñar, ejecutar pruebas y reportar errores.</p>
          </li>
          <li>
            <strong>Módulo 3:</strong> Automatización de Pruebas
            <p>Profundiza en frameworks de automatización como Jest, Cypress y Postman.</p>
          </li>
          <li>
            <strong>Módulo 4:</strong> DevOps y Testing Continuo
            <p>Integra pruebas automáticas en sistemas de CI/CD y aprende sobre métricas y reportes.</p>
          </li>
        </ul>
      </div>

      {/* Instructor Section */}
      <div className="instructor-section slide-in-zoom">
        <h2>Imparte: Fran Guerrero</h2>
        <p>
          Francisco Guerrero es un especialista certificado en Agile ISTQB, con más de 14 años de experiencia en el
          campo de la Calidad del Software. Implementa procesos de prueba, estrategias de control de calidad y
          herramientas innovadoras.
        </p>
      </div>

      {/* Details Section */}
      <div className="details-section slide-in-zoom">
        <h2>Detalles del Curso</h2>
        <ul>
          <li><strong>Inicio:</strong> 17 de Febrero de 2025</li>
          <li><strong>Duración:</strong> 40 horas (7 semanas)</li>
          <li><strong>Horario:</strong> Lunes y Miércoles, 18:00 a 21:00</li>
          <li><strong>Coste:</strong> 497 € (dos plazos)</li>
          <li><strong>Inscripción anticipada:</strong> 447 € (hasta el 31 de Enero)</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact-section slide-in-zoom">
        <h2>Inscripción</h2>
        <p>
          Para más información, contáctanos en <a href="mailto:hello@quark-techie.com">hello@quark-techie.com</a> o
          llama al <strong>622 911 405</strong>.
        </p>
        <div className="final-button-section">
          <button
            className="sky-blue-button"
            onClick={() => (window.location.href = "/contact")}
          >
            Inscribirse Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default CursoCalidadSoftware;