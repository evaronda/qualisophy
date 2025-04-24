import React, { useEffect } from "react";
import "./Resumen.css";

const Resumen = () => {
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
    <div className="resumen">
      {/* Hero Section */}
      <div className="hero-section slide-in-zoom">
        <h1 className="hero-title">Resumen de Cursos</h1>
        <p className="hero-subtitle">
          Explora nuestros cursos diseñados para mejorar tus habilidades en Testing, DevOps y Automatización.
        </p>
      </div>

      {/* Courses Section */}
      <div className="courses-section slide-in-zoom">
        <h2>Cursos Disponibles</h2>
        <ul>
          <li>
            <strong>Calidad de Software y Testing</strong>
            <p>
              Aprende a planificar, ejecutar y automatizar pruebas de software. Incluye Testing en el ciclo de vida del software,
              automatización con Cypress y DevOps Testing. Impartido por Fran Guerrero.
            </p>
            <button
              className="sky-blue-button"
              onClick={() => (window.location.href = "/curso")}
            >
              Ver Curso
            </button>
          </li>
          <li>
            <strong>BDD y Automatización E2E</strong>
            <p>
              Diseña y ejecuta pruebas automatizadas con Cucumber, Gherkin y Cypress. Aprende sobre BDD y su integración en flujos
              de trabajo con CI. Ideal para testers que quieren automatizar de forma profesional.
            </p>
            <button
              className="sky-blue-button"
              onClick={() => (window.location.href = "/bdd-automatizacion")}
            >
              Ver Curso
            </button>
          </li>
          <li>
            <strong>Coding and DevOps for Testers</strong>
            <p>
              Domina habilidades de programación, Git, automatización y CI/CD. Aprende JavaScript, herramientas modernas como Cypress y Playwright,
              y configura pipelines con GitLab. Impartido por Laura Sánchez.
            </p>
            <button
              className="sky-blue-button"
              onClick={() => (window.location.href = "/CursoCodingDevopsTester")}
            >
              Ver Curso
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resumen;