import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Cierra el menú si se hace clic fuera o si se desplaza hacia abajo
  const closeMenuOnClickOutside = (event) => {
    if (isMenuOpen && !event.target.closest('.navbar') && !event.target.closest('.hamburger-menu')) {
      setMenuOpen(false);
    }
  };

  const closeMenuOnScroll = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenuOnClickOutside);
    document.addEventListener('scroll', closeMenuOnScroll);

    // Agrega el listener para el scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Si el usuario se desplaza, oculta el menú
      } else {
        setIsScrolled(false); // Si está en la parte superior de la página, muestra el menú
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', closeMenuOnClickOutside);
      document.removeEventListener('scroll', closeMenuOnScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/Color Horizontal.png" alt="Logo" />
          </Link>
        </div>

        {/* Icono de hamburguesa */}
        <div
          className={`hamburger-menu ${isMenuOpen && !isScrolled ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✖' : '☰'}
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'responsive responsive-menu' : ''}`}>

          <li>
            <NavLink exact to="/" activeClassName="active">
              Página Principal
            </NavLink>
          </li>
          <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <button onClick={toggleDropdown} className="dropdown-btn">
              Cursos <span className="arrow">ᐁ</span>
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/curso" activeClassName="active">
                    Curso 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/curso" activeClassName="active">
                    Curso 2
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/curso" activeClassName="active">
                    Curso 3
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              Consultoría
            </NavLink>
          </li>
          <li>
          <NavLink to="/formacion-empresas" activeClassName="active">
            Formación Empresas
          </NavLink>
          </li>
          <li>
            <NavLink to="/Working-process" activeClassName="active">
              Partnership
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Overlay para el menú móvil */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;

