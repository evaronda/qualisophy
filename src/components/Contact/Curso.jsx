import React, { useState } from "react";
import './Curso.css';
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const menuProps = {
    PaperProps: {
        sx: {
            background: 'linear-gradient(45deg,rgb(122, 165, 205) 30%, #2575fc 90%)',
            color: 'white',
            '& .MuiMenuItem-root': {
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&.Mui-selected:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                }
            }
        }
    }
};

const Curso = () => {
    const [selectedCourse, setSelectedCourse] = useState("");

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
    };

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
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="course-select-label">Seleccione un curso</InputLabel>
                            <Select
                                labelId="course-select-label"
                                id="course-select"
                                value={selectedCourse}
                                name="course"
                                onChange={handleCourseChange}
                                MenuProps={menuProps}
                                sx={{
                                    '& .MuiSelect-icon': {
                                        color: 'white',
                                    }
                                }}
                                required
                            >
                                <MenuItem value="">Seleccione un curso</MenuItem>
                                <MenuItem value="Calidad de Software y Testing">Calidad de Software y Testing</MenuItem>
                                <MenuItem value="BDD y Automatización E2E">BDD y Automatización E2E</MenuItem>
                                <MenuItem value="Coding and DevOps for Testers">Coding and DevOps for Testers</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <input type="hidden" name="formType" value="curso" />
                <button type="submit">Inscribirse</button>
            </form>
        </section>
    );
};

export default Curso;