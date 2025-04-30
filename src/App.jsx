import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Foundations from './components/Foundations/Foundations';
import Services from './components/Services/Services';
import Partnership from './components/Partnership/Partnership';
import NotFound from './components/pages/NotFound';
import Footer from './components/Home/Footer/Footer';
import ScrollToTop from './components/hooks/scrollToTop';
import Contact from './components/Contact/Contact';
import FormacionEmpresas from './components/FormacionEmpresas/FormacionEmpresas';
import CursoCalidadSoftware from './components/Curso/CursoCalidadSoftware';
import CursoBDDAutomE2E from './components/Curso/CursoBDDAutomE2E';
import CursoCodingDevopsTester from "./components/Curso/CursoCodingDevopsTester";
import Resumen from './components/Curso/Resumen';
import Curso from './components/Contact/Curso';


const App = () => {
  const footerRef = useRef(null); // Crea un riferimento per il footer

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' }); // Scrolla al footer
    }
  };

  return (
    <Router>
      <Navbar scrollToFooter={scrollToFooter} /> {/* Passa la funzione al Navbar */}
      <ScrollToTop/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Foundations" element={<Foundations />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Partnership" element={<Partnership />} /> {/* Aggiungi WorkingProcess */}
          <Route path="*" element={<NotFound />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/formacion-empresas" element={<FormacionEmpresas />} />
          <Route path="/curso" element={<CursoCalidadSoftware />} />
          <Route path="/bdd-automatizacion" element={<CursoBDDAutomE2E />} />
          <Route path="/CursoCodingDevopsTester" element={<CursoCodingDevopsTester />} />
          <Route path="/resumen" element={<Resumen />} /> {/* Ruta para el componente Resumen */}
          <Route path="/curso_formulario" element={<Curso />} />
        </Routes>
      </div>
      <Footer ref={footerRef} /> {/* Usa il riferimento per il footer */}
    </Router>
  );
};

export default App;
