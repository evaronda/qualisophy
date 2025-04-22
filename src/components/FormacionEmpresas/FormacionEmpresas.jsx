import React from "react";
import "./FormacionEmpresas.css";

const FormacionEmpresas = () => {
  return (
    <div className="formacion-empresas">
      {/* Hero Section */}
      <div className="hero-section">
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
      <div className="marketing-section">
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
              src="https://via.placeholder.com/600x400"
              alt="Equipo en formación"
              className="animated-image"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <h2>Beneficios de nuestras formaciones</h2>
        <ul>
          <li>Programas personalizados según tus objetivos.</li>
          <li>Impartidos por expertos con experiencia en la industria.</li>
          <li>Modalidad online con horarios flexibles.</li>
          <li>Mejora de habilidades técnicas y metodológicas.</li>
        </ul>
        <img
          src="https://via.placeholder.com/800x300"
          alt="Beneficios de la formación"
          className="animated-image"
        />
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Solicita tu formación</h2>
        <p>
          Completa el formulario y nos pondremos en contacto contigo para
          diseñar una formación a medida para tu empresa.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label>Nombre de la Empresa</label>
            <input type="text" placeholder="Introduce el nombre de tu empresa" required />
          </div>
          <div className="form-group">
            <label>Email de Contacto</label>
            <input type="email" placeholder="Introduce tu email" required />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input type="tel" placeholder="Introduce tu teléfono" required />
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea placeholder="Describe tus necesidades de formación" required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormacionEmpresas;