import React, { useEffect } from "react";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add the class when in view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const elements = document.querySelectorAll(".animated");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div className="home">
      {/* Logo de fondo */}
      <img
        src="/PICTOGRAMA color.png"
        alt="Logo"
        className="logo-background animated"
      />

      {/* Contenedor de texto y secciones */}
      <div className="text-container animated">
        <h1 className="title">
          QUALI<span className="highlight">SOPHY</span>
        </h1>
        <p className="subtitle">
          <strong>
            ¡Bienvenido a Qualisophy!<br />
            Formación práctica, consultoría personalizada y oportunidades reales
            de crecimiento. Te ayudamos a aprender, avanzar y conectar con el
            mundo profesional. Descubre nuestros cursos, servicios para empresas
            y opciones de colaboración.
          </strong>
        </p>
        <div className="button-container animated">
          <a href="/contact" className="button">
            ¡Hablemos de tu proyecto!
          </a>
        </div>

        <div className="home-sections">
          <div className="home-section animated">
            <img src="/public/formacionPrincipal.jpg" alt="Cursos" />
            <h3>Cursos</h3>
            <p>Formaciones prácticas y actualizadas.</p>
            <a href="/cursos" className="button">
              Ver más
            </a>
          </div>
          <div className="home-section animated">
            <img src="/consultoriasPrincipal.jpg" alt="Consultoría" />
            <h3>Consultoría</h3>
            <p>Asesoría para tus proyectos.</p>
            <a href="/about" className="button">
              Descubre cómo
            </a>
          </div>
          <div className="home-section animated">
            <img src="/formacionempresPrincipal.jpg" alt="Formación Empresas" />
            <h3>Formación Empresas</h3>
            <p>Capacitación adaptada a tu equipo.</p>
            <a href="/formacion-empresas" className="button">
              Solicita info
            </a>
          </div>
          <div className="home-section animated">
            <img src="/Partnership.jpg" alt="Partnership" />
            <h3>Partnership</h3>
            <p>Conecta con nuestro talento.</p>
            <a href="/partnership" className="button">
              Colabora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;