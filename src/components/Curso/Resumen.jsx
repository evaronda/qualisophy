import React from "react";
import { useNavigate } from "react-router-dom";
import './Resumen.css';

const Resumen = () => {
  const navigate = useNavigate();

  return (
    <div className="resumen-cursos grid gap-8 p-6">
      {/* Curso 1 */}
      <div className="card bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-2">Calidad de Software y Testing</h2>
        <p className="mb-4">
          Aprende a planificar, ejecutar y automatizar pruebas de software. Incluye temas como Testing en el ciclo de vida del software,
          automatización con Cypress y DevOps Testing. Impartido por Fran Guerrero.
        </p>
        <button
          className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
          onClick={() => navigate("/curso")}
        >
          Ver Curso
        </button>
      </div>

      {/* Curso 2 */}
      <div className="card bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-2">BDD y Automatización E2E</h2>
        <p className="mb-4">
          Diseña y ejecuta pruebas automatizadas con Cucumber, Gherkin y Cypress. Aprende sobre BDD y su integración en flujos
          de trabajo con CI. Ideal para testers que quieren automatizar de forma profesional.
        </p>
        <button
          className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
          onClick={() => navigate("/CursoBDDAutomE2E")}
        >
          Ver Curso
        </button>
      </div>

      {/* Curso 3 */}
      <div className="card bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-2">Coding and DevOps for Testers</h2>
        <p className="mb-4">
          Domina habilidades de programación, Git, automatización y CI/CD. Aprende JavaScript, herramientas modernas como Cypress y Playwright,
          y configura pipelines con GitLab. Impartido por Laura Sánchez.
        </p>
        <button
          className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
          onClick={() => navigate("/CursoCodingDevopsTester")}
        >
          Ver Curso
        </button>
      </div>
    </div>
  );
};

export default Resumen;