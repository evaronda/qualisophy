import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Logo de fondo */}
      <img src="/PICTOGRAMA color.png" alt="Logo" className="logo-background" />

      {/* Contenedor de texto y secciones */}
      <div className="text-container">
        <h1 className="title">
          QUALI<span className="highlight">SOPHY</span>
        </h1>
        <p className="subtitle">
          <strong>
            ¡Bienvenido a Qualisophy!<br />
            Formación práctica, consultoría personalizada y oportunidades reales de crecimiento. <br />
            Te ayudamos a aprender, avanzar y conectar con el mundo profesional. <br />
            Descubre nuestros cursos, servicios para empresas y opciones de colaboración.
          </strong>
        </p>
        <div className="button-container">
          <a href="/contact" className="button">
            ¡Hablemos de tu proyecto!
          </a>
        </div>

        <div className="home-sections">
          <div className="home-section">
            <img src="/public/formacionPrincipal.jpg" alt="Cursos" />
            <h3>Cursos</h3><br />
            <p>Formaciones prácticas y actualizadas.</p><br /><br />
            <a href="/cursos" className="button">Ver más</a>
          </div>
          <div className="home-section">
            <img src="/consultoriasPrincipal.jpg" alt="Consultoría" />
            <h3>Consultoría</h3><br />
            <p>Asesoría para tus proyectos.</p><br /><br /><br />
            <a href="/about" className="button">Descubre cómo</a>
          </div>
          <div className="home-section">
            <img src="/formacionempresPrincipal.jpg" alt="Formación Empresas" />
            <h3>Formación Empresas</h3><br />
            <p>Capacitación adaptada a tu equipo.</p><br /><br />
            <a href="/formacion-empresas" className="button">Solicita info</a>
          </div>
          <div className="home-section">
            <img src="/Partnership.jpg" alt="Partnership" />
            <h3>Partnership</h3><br />
            <p>Conecta con nuestro talento.</p><br /><br /><br />
            <a href="/partnership" className="button">Colabora</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;



