import React, { useEffect } from "react";
import "./FormacionEmpresas.css";

const FormacionEmpresas = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const elements = document.querySelectorAll(".slide-in-zoom");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <div className="formacion-empresas">
      {/* Hero Section */}
      <div className="hero-section slide-in-zoom">
        <img
          src="/foto_presentacion_empresarial.jpg"
          alt="Formación Empresarial"
          className="hero-image"
        />
        <h1 className="hero-title">Formación Empresarial a Medida</h1>
        <p className="hero-subtitle">
          Potencia el talento de tu equipo con formaciones personalizadas y
          orientadas a resultados.
        </p>
      </div>

      {/* Marketing Section */}
      <div className="marketing-section slide-in-zoom">
        <h2>¿Por qué elegirnos?</h2>
        <div className="marketing-content">
          <div className="marketing-text">
            <p>
              En un mundo empresarial en constante evolución, la formación es
              clave para mantenerse competitivo. Ofrecemos programas diseñados
              para cubrir las necesidades específicas de tu empresa, desde
              habilidades técnicas hasta desarrollo de liderazgo.
            </p>
            <p>
              Nuestro enfoque práctico y dinámico garantiza que tu equipo
              adquiera conocimientos aplicables desde el primer día.
            </p>
          </div>
          <div className="marketing-image">
            <img
              src="/equipo_en_formacion.jpg"
              alt="Equipo en formación"
              className="animated-image"
            />
          </div>
        </div>
      </div>

      <div className="benefits-section slide-in-zoom">
        <div className="benefits-image">
          <img
            src="/beneficio_formacion.jpg"
            alt="Beneficios de la formación"
          />
        </div>
        <div className="benefits-text">
          <h2>Beneficios de nuestras formaciones</h2>
          <p>
            Descubre cómo nuestras formaciones pueden transformar tu empresa. Diseñamos experiencias de aprendizaje que no solo mejoran las habilidades de tu equipo, sino que también fomentan la colaboración y la innovación.
          </p>
          <p>
            Con un enfoque centrado en resultados, ayudamos a tu organización a alcanzar sus metas estratégicas mientras potenciamos el desarrollo profesional de cada participante.
          </p>
          <ul>
            <li>Formaciones adaptadas a las necesidades específicas de tu empresa.</li>
            <li>Metodologías prácticas que aseguran la aplicación inmediata de los conocimientos.</li>
            <li>Flexibilidad en formatos y horarios para ajustarse a tu equipo.</li>
            <li>Impacto medible en el desempeño y productividad de tu organización.</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section slide-in-zoom">
        <h2>Solicita tu formación</h2>
        <p>
          Completa el formulario y nos pondremos en contacto contigo para
          diseñar una formación a medida para tu empresa.
        </p>
        <div className="final-button-section">
          <button
            className="sky-blue-button"
            onClick={() => (window.location.href = "/contact")}
          >
            Ir al Formulario de Contacto
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormacionEmpresas;