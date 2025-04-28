import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown

  // Alterna el estado del dropdown
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  // Alterna el estado del menú y la visibilidad del overlay
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    document.querySelector('.overlay').classList.toggle('active', !isMenuOpen);
  };

  // Cierra el menú o dropdown si se hace clic fuera
  const handleOutsideClick = (event) => {
    if (isMenuOpen && !event.target.closest('.navbar') && !event.target.closest('.hamburger-menu')) {
      setMenuOpen(false);
    }
    if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  // Detecta el scroll para cambiar el estado de la barra de navegación
  const handleScroll = () => setIsScrolled(window.scrollY > 0);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen, isDropdownOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/PICTOGRAMA Blanco.png" alt="Logo" />
          </Link>
        </div>

        {/* Icono de menú hamburguesa */}
        <div
          className={`hamburger-menu ${isMenuOpen && !isScrolled ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✖' : '☰'}
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'responsive responsive-menu' : ''}`}>
          <li>
            <NavLink exact to="/" activeClassName="active" style={{ color: 'white' }}>
              Página Principal
            </NavLink>
          </li>
          <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
            <button onClick={toggleDropdown} className="dropdown-btn">
              Cursos <span className="arrow">ᐁ</span>
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-separator">
                  <NavLink to="/resumen" activeClassName="active" style={{ color: 'white' }}>
                    <strong>Todos los Cursos</strong>
                  </NavLink>
                  <hr />
                </li>
                <li>
                  <NavLink to="/curso" activeClassName="active" style={{ color: 'white' }}>
                    Curso Calidad de Software y Testing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bdd-automatizacion" activeClassName="active" style={{ color: 'white' }}>
                    Curso BDD y Automatización E2E
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/CursoCodingDevopsTester" activeClassName="active" style={{ color: 'white' }}>
                    Coding and DevOps for Testers
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" style={{ color: 'white' }}>
              Consultoría
            </NavLink>
          </li>
          <li>
            <NavLink to="/formacion-empresas" activeClassName="active" style={{ color: 'white' }}>
              Formación Empresas
            </NavLink>
          </li>
          <li>
            <NavLink to="/Working-process" activeClassName="active" style={{ color: 'white' }}>
              Partnership
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" style={{ color: 'white' }}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Overlay para cerrar el menú móvil */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;