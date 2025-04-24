import React from 'react';
import './CursoBDDAutomE2E.css';

const CursoBDDAutomE2E = () => {
  return (
    <div className="curso-bdd">
      <div className="hero-section">
        <h1>Curso BDD y Automatización E2E</h1>
        <p>Aprende a diseñar, implementar y mantener pruebas automatizadas utilizando herramientas como Cucumber, Cypress y más.</p>
      </div>

      <section className="modules">
        <h2>Módulos del Curso</h2>
        <ul>
          <li><strong>Módulo 1:</strong> Fundamentos de BDD</li>
          <li><strong>Módulo 2:</strong> Sintaxis Gherkin y Cucumber</li>
          <li><strong>Módulo 3:</strong> Automatización E2E con Cypress</li>
          <li><strong>Módulo 4:</strong> Integración continua y pruebas automatizadas</li>
        </ul>
      </section>

      <section className="instructor">
        <h2>Instructor</h2>
        <p>Este curso es impartido por profesionales con experiencia en QA y automatización de pruebas en entornos Agile.</p>
      </section>
    </div>
  );
};

export default CursoBDDAutomE2E;
