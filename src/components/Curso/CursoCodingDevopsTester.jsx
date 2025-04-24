import React, { useEffect } from "react";
import "./CursoCodingDevOpsTester.css";

const CursoCodingDevOps = () => {
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
    <div className="curso-coding-devops">
      {/* Hero Section */}
      <div className="hero-section slide-in-zoom">
        <img
          src="/CODING.jpg"
          alt="Curso Coding and DevOps for Testers"
          className="hero-image"
        />
        <h1 className="hero-title">CODING AND DEVOPS FOR TESTERS</h1>
        <p className="hero-subtitle">
          Aprende habilidades clave de programación y automatización para integrarte de lleno en entornos DevOps.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="introduction-section slide-in-zoom">
        <h2>¿Qué aprenderás?</h2>
        <p>
          Este curso te proporciona conocimientos prácticos de programación, automatización y herramientas modernas
          utilizadas en pipelines de integración y entrega continua (CI/CD). Es ideal para testers que quieren dar el salto
          al mundo del desarrollo y DevOps.
        </p>
      </div>

      {/* Modules Section */}
      <div className="modules-section slide-in-zoom">
        <h2>Módulos</h2>
        <ul>
          <li>
            <strong>Módulo 1:</strong> Fundamentos de Programación para Testers
            <p>Aprende JavaScript, estructuras de control, funciones y manipulación del DOM.</p>
          </li>
          <li>
            <strong>Módulo 2:</strong> Automatización con Herramientas Modernas
            <p>Utiliza herramientas como Cypress, Playwright y Postman para pruebas automatizadas.</p>
          </li>
          <li>
            <strong>Módulo 3:</strong> Introducción a Git y Control de Versiones
            <p>Maneja proyectos con Git y GitHub, y colabora en equipos de desarrollo.</p>
          </li>
          <li>
            <strong>Módulo 4:</strong> Integración Continua con GitLab CI/CD
            <p>Configura pipelines automáticos, ejecuta pruebas y entrega software de forma eficiente.</p>
          </li>
        </ul>
      </div>

      {/* Instructor Section */}
      <div className="instructor-section slide-in-zoom">
        <h2>Imparte: Laura Sánchez</h2>
        <p>
          Ingeniera de Software y DevOps, con más de 10 años de experiencia en desarrollo de soluciones automatizadas
          y entornos CI/CD en empresas tecnológicas líderes. Certificada en AWS y GitLab CI/CD.
        </p>
      </div>

      {/* Details Section */}
      <div className="details-section slide-in-zoom">
        <h2>Detalles del Curso</h2>
        <ul>
          <li><strong>Inicio:</strong> 3 de Marzo de 2025</li>
          <li><strong>Duración:</strong> 48 horas (8 semanas)</li>
          <li><strong>Horario:</strong> Martes y Jueves, 18:00 a 21:00</li>
          <li><strong>Coste:</strong> 540 € (pago fraccionado disponible)</li>
          <li><strong>Descuento por inscripción anticipada:</strong> 490 € (hasta el 10 de Febrero)</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact-section slide-in-zoom">
        <h2>Inscripción</h2>
        <p>
          Contacta con nosotros en <a href="mailto:formacion@qualisophy.com">formacion@qualisophy.com</a> o llama al <strong>987 654 321</strong>.
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

export default CursoCodingDevOps;
