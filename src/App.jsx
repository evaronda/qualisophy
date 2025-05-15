import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Partnership from './components/Partnership/Partnership';
import NotFound from './components/pages/NotFound';
import Footer from './components/Home/Footer/Footer';
import ScrollToTop from './components/hooks/scrollToTop';
import Contact from './components/Contact/Contact';
import FormacionEmpresas from './components/FormacionEmpresas/FormacionEmpresas';
import Resumen from './components/Curso/Resumen';
import CursoFormulario from './components/Contact/CursoFormulario';
import Colaborar from './components/Contact/Colaborar';
import ChatbotWidget from './components/Chatbot/Chatbot';
import WaveBackground from './components/WaveBackground/WaveBackground';
import CursoDetalle from './components/Curso/CursoDetalle';
import { courses } from './components/Curso/coursesData';

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
        <WaveBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Partnership" element={<Partnership />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/formacion-empresas" element={<FormacionEmpresas />} />
          {/* Unified course detail routes */}
          {courses.map(course => (
            <Route key={course.id} path={course.path} element={<CursoDetalle courseId={course.id} />} />
          ))}
          <Route path="/resumen" element={<Resumen />} /> {/* Ruta para el componente Resumen */}
          <Route path="/curso_formulario" element={<CursoFormulario />} />
          <Route path="/colaborar" element={<Colaborar />} />
        </Routes>
      </div>
      <ChatbotWidget />
      <Footer ref={footerRef} /> {/* Usa il riferimento per il footer */}
    </Router>
  );
};

export default App;
