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

  // Chiudi il menu se si clicca fuori o si scorre giù
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

    // Aggiungi il listener per lo scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);  // Se l'utente scorre, nascondi il menu
      } else {
        setIsScrolled(false);  // Se è in cima alla pagina, mostra il menu
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
            <img src="/logooriginale.png" alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger-menu ${isMenuOpen && !isScrolled ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✖' : '☰'}
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'responsive' : ''}`}>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <button onClick={toggleDropdown} className="dropdown-btn">
              Our Approach <span className="arrow">ᐁ</span>
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/Services" activeClassName="active">
                  Our Services⠀⠀⠀
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Foundations" activeClassName="active">
                    Our Foundations
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/working-process" activeClassName="active">
                  Working Process
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Overlay per il menu mobile */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
