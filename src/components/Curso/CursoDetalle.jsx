import React, { useEffect } from "react";
import { courses } from "./coursesData";
import "./CursoStyle.css";

const CursoDetalle = ({ courseId }) => {
  const course = courses.find((c) => c.id === courseId);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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

  if (!course) return <div>Curso no encontrado</div>;

  return (
    <div className="curso-detalle">
      {/* Hero Section */}
      <div className="hero-section slide-in-zoom">
        <img src={course.image} alt={course.title} className="hero-image" />
        <h1 className="hero-title">{course.title}</h1>
        <p className="hero-subtitle">{course.subtitle}</p>
      </div>
      {/* Introduction Section */}
      {course.introduction && (
        <div className="introduction-section slide-in-zoom">
          <h2>{course.introduction.title}</h2>
          <p>{course.introduction.text}</p>
        </div>
      )}
      {/* Modules Section */}
      <div className="modules-section slide-in-zoom">
        <h2>Módulos</h2>
        <ul>
          {course.modules.map((mod, idx) => (
            <li key={idx}>
              <strong>{mod.title}</strong>
              {mod.description && <p>{mod.description}</p>}
            </li>
          ))}
        </ul>
      </div>
      {/* Instructor Section */}
      <div className="instructor-section slide-in-zoom">
        <h2>Imparte: {course.instructor.name}</h2>
        <p>{course.instructor.description}</p>
      </div>
      {/* Details Section */}
      <div className="details-section slide-in-zoom">
        <h2>Detalles del Curso</h2>
        <ul>
          {course.details.map((d, idx) => (
            <li key={idx}>
              <strong>{d.label}:</strong> {d.value}
            </li>
          ))}
        </ul>
      </div>
      {/* Contact Section */}
      <div className="contact-section slide-in-zoom">
        <h2>Inscripción</h2>
        <p>
          Para más información, contáctanos en <a href={`mailto:${course.contact.email}`}>{course.contact.email}</a> o llama al <strong>{course.contact.phone}</strong>.
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

export default CursoDetalle;
