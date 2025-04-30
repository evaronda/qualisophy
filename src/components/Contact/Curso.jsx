import React from "react";
import './Curso.css';
import Swal from 'sweetalert2';

const Curso = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch(import.meta.env.VITE_REACT_APP_WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            if (response.ok) {
                Swal.fire({
                    title: "Registro exitoso!",
                    text: "Te has inscrito al curso correctamente.",
                    icon: "success",
                });
            } else {
                Swal.fire({
                    title: "Error al registrar",
                    text: "Por favor, inténtelo de nuevo más tarde.",
                    icon: "error"
                });
            }
        } catch {
            Swal.fire({
                title: "Error de conexión",
                text: "No se pudo completar el registro. Verifique su conexión a internet.",
                icon: "error"
            });
        }
    };

    return (
        <section className="curso">
            <form onSubmit={onSubmit}>
                <h2>INSCRÍBETE EN UN CURSO</h2>
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
                    <select name="course" className="field" required>
                        <option value="">Seleccione un curso</option>
                        <option value="Calidad de Software y Testing">Calidad de Software y Testing</option>
                        <option value="BDD y Automatización E2E">BDD y Automatización E2E</option>
                        <option value="Coding and DevOps for Testers">Coding and DevOps for Testers</option>
                    </select>
                </div>
                <button type="submit">Inscribirse</button>
            </form>
        </section>
    );
};

export default Curso;
