// Import statements
import React from "react";
import './Curso.css';
import Swal from 'sweetalert2';

// Component definition
const Curso = () => {
    const [isDropdownOpen, setDropdownOpen] = React.useState(false);
    const [selectedCourse, setSelectedCourse] = React.useState('');

    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!isDropdownOpen);
    };

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
        setDropdownOpen(false);
    };

    // Form submission handler
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append('curso', selectedCourse);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://hook.eu2.make.com/ualsygn1bh4l2vv9aqu10crsm412ndtq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            if (response.ok) {
                Swal.fire({
                    title: "Mensaje enviado con éxito!",
                    text: "Mensaje enviado!",
                    icon: "success",
                });
            } else {
                Swal.fire({
                    title: "Error al enviar el mensaje",
                    text: "Por favor, inténtelo de nuevo más tarde.",
                    icon: "error"
                });
            }
        } catch {
            Swal.fire({
                title: "Error de conexión",
                text: "No se pudo enviar el mensaje. Verifique su conexión a internet.",
                icon: "error"
            });
        }
    };

    return (
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>INSCRÍBASE AL CURSO!</h2>

                <div className="input-box">
                    <label>Nombre completo</label>
                    <input type="text" className="field" placeholder="Ingrese su nombre" name="name" required />
                </div>

                <div className="input-box">
                    <label>Correo electrónico</label>
                    <input type="email" className="field" placeholder="Ingrese su correo electrónico" name="email" required />
                </div>

                <div className="input-box">
                    <label>Curso</label>
                    <button onClick={toggleDropdown} className="dropdown-btn-curso">
                        {selectedCourse || 'Selecciona un curso'} <span className="arrow">ᐁ</span>
                    </button>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu-curso">
                            <li onClick={() => handleCourseSelect('Curso Calidad de Software y Testing')}>
                                Curso Calidad de Software y Testing
                            </li>
                            <li onClick={() => handleCourseSelect('Curso BDD y Automatización E2E')}>
                                Curso BDD y Automatización E2E
                            </li>
                            <li onClick={() => handleCourseSelect('Coding and DevOps for Testers')}>
                                Coding and DevOps for Testers
                            </li>
                        </ul>
                    )}
                </div>

                <button type="submit">Incríbete ahora</button>
            </form>
        </section>
    );
};

export default Curso;

